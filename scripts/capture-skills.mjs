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

    const info = await evaluate(`(() => {
      const s = document.getElementById("skills");
      if (s) {
        if (window.lenis) {
          window.lenis.scrollTo(s, { immediate: true, offset: 0 });
        } else {
          window.scrollTo(0, s.offsetTop);
        }
        return {
          found: true,
          top: s.offsetTop,
          scrollY: window.scrollY,
          clientRect: s.getBoundingClientRect()
        };
      }
      return { found: false };
    })()`);
    console.log('Scroll info:', info?.result?.value);

    await new Promise(r => setTimeout(r, 2500));

    const check = await evaluate(`(() => {
      const s = document.getElementById("skills");
      return {
        scrollY: window.scrollY,
        clientRect: s?.getBoundingClientRect()
      };
    })()`);
    console.log('After wait:', check?.result?.value);

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    writeFileSync('C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\skills_view.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved skills_view.png!');

    ws.close();
  }
} catch (e) {
  console.error(e);
} finally {
  chrome.kill();
  process.exit(0);
}
