import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\chrome-temp';

const chrome = spawn(chromePath, [
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--no-first-run',
  '--no-default-browser-check',
  '--headless=new',
  '--window-size=1280,900',
  'http://localhost:3000'
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

    const evaluate = (expression, awaitPromise = false) => send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });

    const sections = ['profile', 'skills', 'projects', 'contact'];
    for (const sec of sections) {
      await evaluate(`(async () => {
        const el = document.getElementById("${sec}");
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { immediate: true });
          } else {
            el.scrollIntoView({ behavior: 'instant' });
          }
        }
      })()`, true);
      await new Promise(r => setTimeout(r, 1500));

      const shot = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync(`C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\section_${sec}.png`, Buffer.from(shot.data, 'base64'));
      console.log(`Saved section_${sec}.png!`);
    }

    ws.close();
  }
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
  process.exit(0);
}
