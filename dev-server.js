const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);
        let filePath = url.pathname;

        // 預設首頁
        if (filePath === '/') {
            filePath = '/index.html';
        }

        // 從 src 目錄提供檔案
        const file = Bun.file('./src' + filePath);
        
        if (await file.exists()) {
            return new Response(file);
        }

        // 404 頁面
        return new Response('404 Not Found', { status: 404 });
    },
});

console.log(`🚀 開發伺服器運行在 http://localhost:${server.port}`);
console.log('按 Ctrl+C 停止伺服器');
