# chuan-fitlife

FitLife 健康管理品牌網站，採用 Next.js App Router 與 Tailwind CSS。

## 開始使用

```bash
npm install
npm run dev
```

啟動後開啟 [http://localhost:3000](http://localhost:3000)。

## Firebase 設定

1. 建立 Firebase 專案並啟用 Authentication（Email/Password）與 Firestore。
2. 複製 `.env.example` 為 `.env.local`，填入對應的 Firebase 設定值。
3. Firestore 建議建立 `products` 與 `users` 集合，並於 `users/{uid}` 中設定 `role` 欄位（例如 `admin`）。

## 專案結構

- `src/app`：App Router 頁面與路由
- `src/context`：登入狀態與角色管理
- `src/lib`：Firebase 與資料存取邏輯
- `public/images`：品牌素材
