import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import SiteNav from "./components/site-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitLife | 健康管理品牌",
  description: "FitLife 專注於健康管理與體態優化，提供專業服務與商品方案。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-white">
          <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-semibold text-slate-900">
                FitLife
              </Link>
              <nav className="hidden md:flex">
                <SiteNav />
              </nav>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-brand-600 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                查看商品
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <span>© 2026 FitLife. All rights reserved.</span>
              <span>健康管理・體態訓練・未來會員服務</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
