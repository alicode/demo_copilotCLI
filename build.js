import { file, write } from 'bun';
import { join } from 'path';
import { readdir, mkdir, rm } from 'fs/promises';

const srcDir = './src';
const distDir = './dist';

console.log('🚀 開始建置...');

// 清理並創建 dist 目錄
try {
    await rm(distDir, { recursive: true, force: true });
} catch (e) {
    // 目錄不存在，忽略錯誤
}
await mkdir(distDir, { recursive: true });

// 最小化 CSS
async function minifyCSS(content) {
    return content
        .replace(/\/\*[\s\S]*?\*\//g, '') // 移除註釋
        .replace(/\s+/g, ' ') // 壓縮空白
        .replace(/\s*([{}:;,])\s*/g, '$1') // 移除符號周圍空白
        .replace(/;}/g, '}') // 移除最後的分號
        .trim();
}

// 最小化 JavaScript
async function minifyJS(content) {
    return content
        .replace(/\/\*[\s\S]*?\*\//g, '') // 移除多行註釋
        .replace(/\/\/.*/g, '') // 移除單行註釋
        .replace(/\s+/g, ' ') // 壓縮空白
        .replace(/\s*([{}();,:])\s*/g, '$1') // 移除符號周圍空白
        .trim();
}

// 最小化 HTML
async function minifyHTML(content) {
    return content
        .replace(/<!--[\s\S]*?-->/g, '') // 移除註釋
        .replace(/\s+/g, ' ') // 壓縮空白
        .replace(/>\s+</g, '><') // 移除標籤間空白
        .trim();
}

try {
    // 讀取並處理 CSS
    const cssContent = await file(join(srcDir, 'styles.css')).text();
    const minifiedCSS = await minifyCSS(cssContent);
    await write(join(distDir, 'styles.css'), minifiedCSS);
    console.log('✓ CSS 已最小化');

    // 讀取並處理 JavaScript
    const jsContent = await file(join(srcDir, 'script.js')).text();
    const minifiedJS = await minifyJS(jsContent);
    await write(join(distDir, 'script.js'), minifiedJS);
    console.log('✓ JavaScript 已最小化');

    // 讀取並處理 HTML
    const htmlContent = await file(join(srcDir, 'index.html')).text();
    const minifiedHTML = await minifyHTML(htmlContent);
    await write(join(distDir, 'index.html'), minifiedHTML);
    console.log('✓ HTML 已最小化');

    // 計算壓縮比例
    const originalSize = cssContent.length + jsContent.length + htmlContent.length;
    const minifiedSize = minifiedCSS.length + minifiedJS.length + minifiedHTML.length;
    const saved = ((1 - minifiedSize / originalSize) * 100).toFixed(2);

    console.log('\n📊 建置完成！');
    console.log(`原始大小: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`壓縮後: ${(minifiedSize / 1024).toFixed(2)} KB`);
    console.log(`節省: ${saved}%`);
    console.log(`\n輸出目錄: ${distDir}`);

} catch (error) {
    console.error('❌ 建置失敗:', error);
    process.exit(1);
}
