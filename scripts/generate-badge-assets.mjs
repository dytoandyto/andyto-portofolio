import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([lenBuf, crcInput, crcBuf]);
}

function createPng(width, height, getPixel) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // filter None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = getPixel(x, y, width, height);
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(rawData, { level: 9 });
  return Buffer.concat([
    signature,
    makeChunk("IHDR", ihdr),
    makeChunk("IDAT", compressedData),
    makeChunk("IEND", Buffer.alloc(0)),
  ]);
}

// Simple font renderer for clean vector-like bitmap labels
const FONT_5X7 = {
  'A': [0x0e, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11],
  'B': [0x1e, 0x11, 0x11, 0x1e, 0x11, 0x11, 0x1e],
  'C': [0x0e, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0e],
  'D': [0x1c, 0x12, 0x11, 0x11, 0x11, 0x12, 0x1c],
  'E': [0x1f, 0x10, 0x10, 0x1e, 0x10, 0x10, 0x1f],
  'F': [0x1f, 0x10, 0x10, 0x1e, 0x10, 0x10, 0x10],
  'G': [0x0e, 0x11, 0x10, 0x17, 0x11, 0x11, 0x0f],
  'H': [0x11, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11],
  'I': [0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e],
  'J': [0x07, 0x02, 0x02, 0x02, 0x02, 0x12, 0x0c],
  'K': [0x11, 0x12, 0x14, 0x18, 0x14, 0x12, 0x11],
  'L': [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1f],
  'M': [0x11, 0x1b, 0x15, 0x11, 0x11, 0x11, 0x11],
  'N': [0x11, 0x19, 0x15, 0x13, 0x11, 0x11, 0x11],
  'O': [0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e],
  'P': [0x1e, 0x11, 0x11, 0x1e, 0x10, 0x10, 0x10],
  'Q': [0x0e, 0x11, 0x11, 0x11, 0x15, 0x09, 0x16],
  'R': [0x1e, 0x11, 0x11, 0x1e, 0x14, 0x12, 0x11],
  'S': [0x0f, 0x10, 0x10, 0x0e, 0x01, 0x01, 0x1e],
  'T': [0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04],
  'U': [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e],
  'V': [0x11, 0x11, 0x11, 0x11, 0x11, 0x0a, 0x04],
  'W': [0x11, 0x11, 0x11, 0x15, 0x15, 0x1b, 0x11],
  'X': [0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11],
  'Y': [0x11, 0x11, 0x0a, 0x04, 0x04, 0x04, 0x04],
  'Z': [0x1f, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1f],
  '0': [0x0e, 0x13, 0x15, 0x19, 0x11, 0x11, 0x0e],
  '1': [0x04, 0x0c, 0x04, 0x04, 0x04, 0x04, 0x0e],
  '2': [0x0e, 0x11, 0x01, 0x06, 0x08, 0x10, 0x1f],
  '3': [0x1f, 0x02, 0x04, 0x02, 0x01, 0x11, 0x0e],
  '4': [0x02, 0x06, 0x0a, 0x12, 0x1f, 0x02, 0x02],
  '5': [0x1f, 0x10, 0x1e, 0x01, 0x01, 0x11, 0x0e],
  '6': [0x06, 0x08, 0x10, 0x1e, 0x11, 0x11, 0x0e],
  '7': [0x1f, 0x01, 0x02, 0x04, 0x08, 0x08, 0x08],
  '8': [0x0e, 0x11, 0x11, 0x0e, 0x11, 0x11, 0x0e],
  '9': [0x0e, 0x11, 0x11, 0x0f, 0x01, 0x02, 0x0c],
  '-': [0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00],
  '/': [0x01, 0x02, 0x02, 0x04, 0x08, 0x08, 0x10],
  '.': [0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x06],
  ':': [0x00, 0x06, 0x06, 0x00, 0x06, 0x06, 0x00],
  ' ': [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
};

function hasGlyphPixel(char, gx, gy) {
  const glyph = FONT_5X7[char.toUpperCase()];
  if (!glyph || gy < 0 || gy >= 7 || gx < 0 || gx >= 5) return false;
  return (glyph[gy] & (1 << (4 - gx))) !== 0;
}

function textPixel(text, px, py, originX, originY, scale = 2) {
  const charWidth = 6 * scale;
  const charHeight = 8 * scale;
  const relX = px - originX;
  const relY = py - originY;
  if (relY < 0 || relY >= charHeight) return false;
  const charIdx = Math.floor(relX / charWidth);
  if (charIdx < 0 || charIdx >= text.length) return false;
  const char = text[charIdx];
  const gx = Math.floor((relX % charWidth) / scale);
  const gy = Math.floor(relY / scale);
  return hasGlyphPixel(char, gx, gy);
}

// 1. FRONT BADGE (512 x 768)
const frontPng = createPng(512, 768, (x, y, w, h) => {
  // Border
  const isBorder = (x < 16 || x >= w - 16 || y < 16 || y >= h - 16);
  const isInnerBorder = ((x === 20 || x === w - 21) && y >= 20 && y <= h - 21) ||
                        ((y === 20 || y === h - 21) && x >= 20 && x <= w - 21);

  if (isBorder) return [24, 25, 22, 255];
  if (isInnerBorder) return [212, 255, 105, 180];

  // Top strap slot hole area
  if (y >= 40 && y <= 64 && x >= 206 && x <= 306) {
    return [17, 18, 16, 255];
  }

  // Header Bar
  if (y >= 90 && y <= 160) {
    if (textPixel("ANDYTO", x, y, 48, 110, 4)) return [242, 240, 233, 255];
    if (textPixel(".STUDIO", x, y, 220, 118, 2)) return [212, 255, 105, 255];
    if (textPixel("CRAFTED DIGITAL // 2026", x, y, 48, 145, 1)) return [142, 144, 134, 255];
    if (textPixel("PASS: #AD-0824-SE", x, y, 320, 145, 1)) return [212, 255, 105, 255];
  }

  // Horizontal divider
  if (y === 170 && x >= 40 && x <= w - 40) return [242, 240, 233, 50];

  // Chip Icon representation
  if (x >= 48 && x <= 140 && y >= 200 && y <= 270) {
    const isChipBorder = x === 48 || x === 140 || y === 200 || y === 270;
    if (isChipBorder) return [212, 255, 105, 200];
    if ((x === 94) || (y === 235)) return [212, 255, 105, 120];
    return [30, 32, 28, 255];
  }

  // Profile Title & Role
  if (textPixel("ANDYTO", x, y, 170, 210, 4)) return [242, 240, 233, 255];
  if (textPixel("SOFTWARE ENGINEER", x, y, 170, 246, 2)) return [212, 255, 105, 255];

  // Body Narrative
  if (textPixel("DISCIPLINE: FRONTEND / UI/UX / FULL-STACK", x, y, 48, 310, 1)) return [242, 240, 233, 220];
  if (textPixel("STATUS: AVAILABLE FOR SELECT CONTRACTS", x, y, 48, 330, 1)) return [114, 229, 138, 255];
  if (textPixel("LOCATION: INDONESIA - REMOTE WORLDWIDE", x, y, 48, 350, 1)) return [142, 144, 134, 200];

  // Core Strengths Box
  if (x >= 48 && x <= w - 48 && y >= 390 && y <= 540) {
    const isBoxBorder = x === 48 || x === w - 48 || y === 390 || y === 540;
    if (isBoxBorder) return [242, 240, 233, 40];
    if (textPixel("TECH STACK", x, y, 64, 405, 1)) return [212, 255, 105, 255];
    if (textPixel("REACT 19 - NEXT.JS - TYPESCRIPT", x, y, 64, 430, 2)) return [242, 240, 233, 255];
    if (textPixel("TAILWIND CSS - MOTION - THREE.JS", x, y, 64, 460, 2)) return [242, 240, 233, 230];
    if (textPixel("LARAVEL - POSTGRESQL - PRISMA", x, y, 64, 490, 2)) return [142, 144, 134, 230];
    return [24, 26, 22, 255];
  }

  // Simulated Barcode
  if (y >= 580 && y <= 660 && x >= 48 && x <= w - 48) {
    const bar = Math.floor((x - 48) / 3);
    const pattern = (bar * 37 + (bar % 5) * 13) % 7;
    if (pattern === 0 || pattern === 2 || pattern === 4) {
      return [242, 240, 233, 240];
    }
    return [18, 19, 16, 255];
  }

  // Barcode number
  if (textPixel("0824 9912 3014 2026", x, y, 140, 675, 2)) return [142, 144, 134, 255];

  // Subtle background grid
  if (x % 32 === 0 || y % 32 === 0) return [22, 24, 20, 255];

  return [18, 19, 16, 255];
});

// 2. BACK BADGE (512 x 768)
const backPng = createPng(512, 768, (x, y, w, h) => {
  const isBorder = (x < 16 || x >= w - 16 || y < 16 || y >= h - 16);
  if (isBorder) return [24, 25, 22, 255];

  // Top strap slot hole area
  if (y >= 40 && y <= 64 && x >= 206 && x <= 306) {
    return [17, 18, 16, 255];
  }

  // Magnetic Stripe
  if (y >= 100 && y <= 190) {
    return [10, 11, 9, 255];
  }

  // Signature Block
  if (y >= 230 && y <= 310 && x >= 48 && x <= w - 48) {
    const isSigBorder = x === 48 || x === w - 48 || y === 230 || y === 310;
    if (isSigBorder) return [242, 240, 233, 40];
    if (textPixel("AUTHORIZED SIGNATURE", x, y, 60, 240, 1)) return [142, 144, 134, 255];
    if (textPixel("ANDYTO", x, y, 160, 265, 3)) return [212, 255, 105, 255];
    return [22, 23, 20, 255];
  }

  // Instructions / Disclaimer
  if (textPixel("THIS CREDENTIAL IDENTIFIES ANDYTO", x, y, 48, 350, 1)) return [242, 240, 233, 200];
  if (textPixel("AS A DIGITAL PRODUCT BUILDER AND SOFTWARE", x, y, 48, 370, 1)) return [142, 144, 134, 200];
  if (textPixel("ENGINEER COMMITTED TO RIGOR AND ELEGANCE.", x, y, 48, 390, 1)) return [142, 144, 134, 200];

  // Simulated QR Code (square 160x160)
  if (x >= 176 && x <= 336 && y >= 450 && y <= 610) {
    const qx = Math.floor((x - 176) / 8);
    const qy = Math.floor((y - 450) / 8);
    // Standard corner position markers
    const isTopLeft = qx < 6 && qy < 6;
    const isTopRight = qx >= 14 && qy < 6;
    const isBottomLeft = qx < 6 && qy >= 14;
    if (isTopLeft || isTopRight || isBottomLeft) {
      const lx = qx < 6 ? qx : qx - 14;
      const ly = qy < 6 ? qy : qy - 14;
      if (lx === 0 || lx === 5 || ly === 0 || ly === 5 || (lx >= 2 && lx <= 3 && ly >= 2 && ly <= 3)) {
        return [212, 255, 105, 255];
      }
      return [18, 19, 16, 255];
    }
    const rand = (qx * 19 + qy * 31 + qx * qy) % 3;
    if (rand === 0) return [242, 240, 233, 255];
    return [18, 19, 16, 255];
  }

  if (textPixel("SCAN FOR DIGITAL PORTFOLIO", x, y, 140, 640, 1)) return [212, 255, 105, 255];
  if (textPixel("ANDYTO.DEV // CRAFTED DIGITAL", x, y, 130, 660, 1)) return [142, 144, 134, 200];

  return [16, 17, 14, 255];
});

// 3. STRAP BAND (192 x 384)
const bandPng = createPng(192, 384, (x, y, w) => {
  // Edge border stitching
  if (x < 12 || x >= w - 12) {
    if (y % 16 < 8) return [212, 255, 105, 220]; // stitched thread
    return [30, 31, 28, 255];
  }

  // Woven strap texture
  const isStitch = (x + y) % 4 === 0;

  // Printed text repeating along strap
  // Strap text reads vertically or rotated
  if (textPixel("ANDYTO", x, y, 48, 60, 2)) return [212, 255, 105, 255];
  if (textPixel("ENGINEER", x, y, 36, 120, 2)) return [242, 240, 233, 255];
  if (textPixel("CRAFTED", x, y, 44, 200, 2)) return [212, 255, 105, 255];
  if (textPixel("DIGITAL", x, y, 44, 260, 2)) return [242, 240, 233, 255];
  if (textPixel("2026", x, y, 64, 330, 2)) return [142, 144, 134, 255];

  if (isStitch) return [24, 25, 22, 255];
  return [17, 18, 15, 255];
});

const publicDir = path.resolve("public");
fs.writeFileSync(path.join(publicDir, "card-front.png"), frontPng);
fs.writeFileSync(path.join(publicDir, "card-back.png"), backPng);
fs.writeFileSync(path.join(publicDir, "band.png"), bandPng);

console.log("Generated card-front.png, card-back.png, and band.png successfully!");
