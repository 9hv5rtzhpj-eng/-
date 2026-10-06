# GitHub Pages 部署指南

本專案已完全優化為**純前端靜態架構（Pure Frontend）**，無任何後端依賴，可直接免費託管於 **GitHub Pages**。

我們已為您準備了 **兩種最簡便的部署方式**，請挑選您喜歡的方法：

---

## 方式 A：GitHub Actions 自動化部署（最推薦，一鍵全自動）

專案內已包含 `.github/workflows/deploy.yml` 自動建置與發佈腳本。

### 步驟：
1. 將本專案程式碼推送到您的 GitHub 儲存庫（`main` 或 `master` 分支）：
   ```bash
   git init
   git add .
   git commit -m "feat: init portfolio"
   git remote add origin https://github.com/<您的使用者名稱>/<專案名稱>.git
   git branch -M main
   git push -u origin main
   ```
2. 開啟您的 GitHub 儲存庫頁面，前往 **Settings** → **Pages**。
3. 在 **Build and deployment** 下方的 **Source**，切換為 **GitHub Actions**。
4. 每當您有新的 commit 推送到 `main`，GitHub 會自動執行建置並發布到：
   `https://<您的使用者名稱>.github.io/<專案名稱>/`

---

## 方式 B：直接上傳 Pure HTML/CSS/JS（免安裝 Node.js、免編譯）

若您希望完全不依賴任何編譯工具，本專案在 `pure-html/` 目錄中提供了一套完整的 **原生 HTML + CSS + JavaScript** 獨立版本：

- `pure-html/index.html`
- `pure-html/style.css`
- `pure-html/app.js`

### 步驟：
1. 將 `pure-html/` 資料夾內的這 3 個檔案複製到您 GitHub 儲存庫的根目錄（Root）。
2. 推送至 GitHub 後，前往 GitHub 儲存庫的 **Settings** → **Pages**。
3. 在 **Source** 選擇 **Deploy from a branch**，Branch 選擇 `main` / `root`。
4. 點擊 **Save**，約 1~2 分鐘後即可透過 GitHub Pages 網址直接瀏覽！

---

## 方式 C：使用已編譯好的 `dist/` 資料夾

本專案執行 `npm run build` 後會產出 100% 靜態的 `dist/` 資料夾（已配置 `base: './'` 相對路徑，適用於任何子目錄網址）。

### 步驟：
1. 本地執行：
   ```bash
   npm run build
   ```
2. 您可直接使用 `gh-pages` 套件發布：
   ```bash
   npx gh-pages -d dist
   ```
3. 前往 GitHub 儲存庫的 **Settings** → **Pages**，將分支切換為 `gh-pages` 即可！
