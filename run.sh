#!/bin/bash

# 確保 Bun 在 PATH 中
export PATH="$HOME/.bun/bin:$PATH"

# 執行對應的 bun 命令
case "$1" in
    "dev")
        echo "🚀 啟動開發伺服器..."
        bun run dev
        ;;
    "build")
        echo "📦 建置專案..."
        bun run build
        ;;
    "preview")
        echo "👀 預覽生產版本..."
        bun run preview
        ;;
    *)
        echo "使用方式："
        echo "  ./run.sh dev      - 啟動開發伺服器"
        echo "  ./run.sh build    - 建置專案"
        echo "  ./run.sh preview  - 預覽生產版本"
        exit 1
        ;;
esac
