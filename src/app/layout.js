import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitLife | 商品展示",
  description: "FitLife 商品展示平台，專注於健康與體態管理。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-xl font-semibold text-slate-900">
                FitLife
              </Link>
              <nav className="flex items-center gap-4 text-sm text-slate-600">
                <Link href="/products" className="transition hover:text-slate-900">
                  商品列表
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-6 py-6 text-sm text-slate-500">
              © 2026 FitLife. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
