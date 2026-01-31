const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);
        let filePath = url.pathname;

        // 預設首頁
        if (filePath === '/') {
            filePath = '/index.html';
        }

        // 從 dist 目錄提供檔案
        const file = Bun.file('./dist' + filePath);
        
        if (await file.exists()) {
            return new Response(file);
        }

        // 404 頁面
        return new Response('404 Not Found', { status: 404 });
    },
});

console.log(`🚀 預覽伺服器運行在 http://localhost:${server.port}`);
console.log('正在提供 dist 目錄的內容');
console.log('按 Ctrl+C 停止伺服器');
