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

### Firestore 商品範例資料

```json
[
  {
    "id": "protein-original",
    "name": "綜合植物蛋白飲",
    "flavor": "原味",
    "weight": "550g",
    "price": 1850,
    "imageUrl": "https://images.unsplash.com/placeholder1",
    "status": "active",
    "description": "植物蛋白補給，適合日常運動與體態管理。",
    "usage": "每日 1-2 份，搭配飲水補充。"
  }
]
```

## 專案結構

- `src/app`：App Router 頁面與路由
- `src/context`：登入狀態與角色管理
- `src/lib`：Firebase 與資料存取邏輯
- `public/images`：品牌素材
