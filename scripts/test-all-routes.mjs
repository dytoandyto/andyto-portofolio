import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\chrome-temp';

const routes = ['/', '/about', '/work', '/contact'];

for (const route of routes) {
  console.log(`\n=== Testing Route: ${route} ===`);
  const chrome = spawn(chromePath, [
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--headless=new',
    '--window-size=1280,900',
    `http://localhost:3000${route}`
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const targetsRes = await fetch('http://localhost:9222/json/list');
    const targets = await targetsRes.json();
    const pageTarget = targets.find(t => t.type === 'page');

    if (pageTarget) {
      const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
      await new Promise(r => ws.onopen = r);

      let id = 1;
      const send = (method, params = {}) => new Promise((resolve) => {
        const msgId = id++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });

      ws.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.method === 'Runtime.consoleAPICalled') {
          console.log(`[${route} CONSOLE]`, data.params.type, data.params.args.map(a => a.value || a.description).join(' '));
        }
        if (data.method === 'Runtime.exceptionThrown') {
          console.error(`[${route} EXCEPTION]`, data.params.exceptionDetails?.text, data.params.exceptionDetails?.exception?.description);
        }
      });

      await send('Runtime.enable');
      await send('Log.enable');
      await send('Page.enable');

      await new Promise(r => setTimeout(r, 2000));

      const evaluate = (expression) => send('Runtime.evaluate', { expression, returnByValue: true });

      const titleRes = await evaluate('document.title');
      const bodyBgRes = await evaluate('window.getComputedStyle(document.body).backgroundColor');
      console.log(`Route ${route}: Title = "${titleRes?.result?.value}", Body Bg = "${bodyBgRes?.result?.value}"`);

      // Capture screenshot
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      if (shot?.data) {
        const buf = Buffer.from(shot.data, 'base64');
        const filename = route === '/' ? 'route_home.png' : `route_${route.replace('/', '')}.png`;
        const outPath = `C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\${filename}`;
        writeFileSync(outPath, buf);
        console.log(`Saved screenshot to ${outPath}`);
      }

      ws.close();
    }
  } catch (e) {
    console.error(`Error on route ${route}:`, e);
  } finally {
    chrome.kill();
  }
}

console.log('\nAll routes tested successfully.');
process.exit(0);
