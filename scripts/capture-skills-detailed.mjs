import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\chrome-temp';

async function capture() {
  const chrome = spawn(chromePath, [
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--headless=new',
    '--window-size=1280,900',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 3500));

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

      const evaluate = (expression) => send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });

      // 1. Scroll directly into #skills and verify
      const top1 = await evaluate(`new Promise((resolve) => {
        let attempts = 0;
        const fn = () => {
          attempts++;
          const s = document.getElementById("skills");
          if (s) {
            if (window.lenis) {
              window.lenis.scrollTo(s, { immediate: true, offset: 0 });
            } else {
              s.scrollIntoView({ behavior: 'instant', block: 'start' });
            }
            setTimeout(() => {
              const r = s.getBoundingClientRect();
              if (Math.abs(r.top) < 100 || attempts > 20) {
                resolve({ top: r.top, scrollY: window.scrollY });
              } else {
                fn();
              }
            }, 200);
          } else {
            setTimeout(fn, 200);
          }
        };
        fn();
      })`);
      console.log('Scrolled to skills heading:', top1?.result?.value);

      await new Promise(r => setTimeout(r, 2000));

      const shot1 = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync('C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\skills_heading_view.png', Buffer.from(shot1.data, 'base64'));
      console.log('Saved skills_heading_view.png');

      // 2. Scroll 600px down inside #skills to show cards with background slats
      const top2 = await evaluate(`new Promise((resolve) => {
        const s = document.getElementById("skills");
        if (window.lenis && s) {
          window.lenis.scrollTo(s, { immediate: true, offset: 500 });
        } else if (s) {
          window.scrollTo(0, s.offsetTop + 500);
        }
        setTimeout(() => {
          resolve({ scrollY: window.scrollY, top: s ? s.getBoundingClientRect().top : 0 });
        }, 500);
      })`);
      console.log('Scrolled to cards offset:', top2?.result?.value);

      await new Promise(r => setTimeout(r, 2000));

      const shot2 = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync('C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\skills_cards_view.png', Buffer.from(shot2.data, 'base64'));
      console.log('Saved skills_cards_view.png');

      // 3. Mobile viewport check (390 x 844)
      await send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });

      const top3 = await evaluate(`new Promise((resolve) => {
        const s = document.getElementById("skills");
        if (window.lenis && s) {
          window.lenis.scrollTo(s, { immediate: true, offset: 0 });
        } else if (s) {
          s.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
        setTimeout(() => {
          resolve({ scrollY: window.scrollY, top: s ? s.getBoundingClientRect().top : 0 });
        }, 500);
      })`);
      console.log('Scrolled mobile to skills:', top3?.result?.value);

      await new Promise(r => setTimeout(r, 2000));

      const shot3 = await send('Page.captureScreenshot', { format: 'png' });
      writeFileSync('C:\\Users\\otydn\\.gemini\\antigravity-ide\\brain\\05b07728-f806-4366-bdb8-4d4000ffe64c\\skills_mobile_view.png', Buffer.from(shot3.data, 'base64'));
      console.log('Saved skills_mobile_view.png');

      ws.close();
    }
  } catch (err) {
    console.error('Error in capture:', err);
  } finally {
    chrome.kill();
  }
}

capture();
