# CloudFlow SaaS 服務首頁

一個專業、響應式的 SaaS 服務首頁，使用 Pure HTML、CSS 和 JavaScript 建立，並透過 Bun 進行建置與最小化。

## ✨ 功能特色

- 📱 **完整 RWD 支援** - 適配桌面、平板與手機裝置
- 🎨 **現代化設計** - 漸層色彩與流暢動畫效果
- 🚀 **高效能** - Bun 建置與資源最小化
- ♿ **無障礙設計** - 符合網頁無障礙標準
- 📦 **純前端** - 無需後端即可運行

## 🛠️ 技術堆疊

- **HTML5** - 語意化標籤結構
- **CSS3** - Flexbox/Grid 佈局、CSS Variables
- **JavaScript (ES6+)** - 原生 JavaScript，無需框架
- **Bun** - 快速的 JavaScript 執行環境與建置工具

## 📋 前置需求

確保您的系統已安裝 [Bun](https://bun.sh)：

```bash
# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Windows (使用 PowerShell)
powershell -c "irm bun.sh/install.ps1|iex"
```

## 🚀 快速開始

### 1. 安裝依賴

```bash
bun install
```

### 2. 開發模式

啟動開發伺服器（支援熱重載）：

```bash
bun run dev
# 或使用便捷腳本
./run.sh dev
```

然後在瀏覽器開啟 http://localhost:3000

### 3. 建置專案

建置並最小化所有資源：

```bash
bun run build
# 或使用便捷腳本
./run.sh build
```

建置後的檔案會輸出到 `dist/` 目錄。

### 4. 預覽建置結果

預覽生產版本：

```bash
bun run preview
# 或使用便捷腳本
./run.sh preview
```

然後在瀏覽器開啟 http://localhost:3000

## 📁 專案結構

```
.
├── src/                    # 原始碼目錄
│   ├── index.html         # 主要 HTML 檔案
│   ├── styles.css         # 樣式表
│   └── script.js          # JavaScript 檔案
├── dist/                   # 建置輸出目錄（自動生成）
│   ├── index.html         # 最小化的 HTML
│   ├── styles.css         # 最小化的 CSS
│   └── script.js          # 最小化的 JavaScript
├── build.js               # 建置腳本
├── dev-server.js          # 開發伺服器
├── preview-server.js      # 預覽伺服器
├── package.json           # 專案配置
└── README.md              # 說明文件
```

## 🎯 主要功能區塊

1. **導航列 (Navigation)** - 固定式導航，含響應式選單
2. **首頁橫幅 (Hero Section)** - 吸睛的漸層背景與 CTA 按鈕
3. **功能特色 (Features)** - 6 個功能卡片展示
4. **價格方案 (Pricing)** - 3 個定價層級選項
5. **客戶評價 (Testimonials)** - 社會證明區塊
6. **行動呼籲 (CTA)** - 促使用戶註冊
7. **頁尾 (Footer)** - 網站地圖與相關連結

## 📱 響應式斷點

- **桌面**: > 768px
- **平板**: 481px - 768px
- **手機**: ≤ 480px

## 🔧 自訂化

### 修改顏色主題

編輯 `src/styles.css` 中的 CSS 變數：

```css
:root {
    --primary-color: #4F46E5;      /* 主要色 */
    --primary-dark: #4338CA;       /* 主要色深色版 */
    --secondary-color: #10B981;    /* 次要色 */
    --text-primary: #1F2937;       /* 主要文字色 */
    --text-secondary: #6B7280;     /* 次要文字色 */
}
```

### 修改網站內容

編輯 `src/index.html` 直接修改文字、標題、功能描述等內容。

### 新增互動功能

在 `src/script.js` 中新增自訂的 JavaScript 邏輯。

## 🌐 部署

建置完成後，將 `dist/` 目錄的內容部署到任何靜態網站託管服務：

- **Vercel**: `vercel deploy dist/`
- **Netlify**: 將 `dist/` 目錄拖曳到 Netlify
- **GitHub Pages**: 推送 `dist/` 內容到 gh-pages 分支
- **傳統主機**: 透過 FTP 上傳 `dist/` 內容

## 📊 效能優化

建置過程會自動執行以下最佳化：

- ✅ CSS 最小化（移除註釋、壓縮空白）
- ✅ JavaScript 最小化（移除註釋、壓縮空白）
- ✅ HTML 最小化（移除註釋、壓縮標籤）
- ✅ 平均減少 ~30-40% 的檔案大小

## 📝 授權

MIT License - 可自由使用、修改與分發

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request！

## 📧 聯絡資訊

如有任何問題，歡迎聯繫我們。
