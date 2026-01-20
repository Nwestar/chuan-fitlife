import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            FitLife
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            讓健康與體態管理變得更有秩序
          </h1>
          <p className="text-lg text-slate-600">
            FitLife 專注於提供簡潔有效的訓練與管理方案，協助你在忙碌生活中
            維持穩定的健康節奏。
          </p>
          <Link
            href="/products"
            className="inline-flex w-fit items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            進入商品列表
          </Link>
        </div>
        <div className="flex-1 rounded-3xl bg-slate-100 p-8 shadow-inner">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">品牌理念</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              以科學訓練與日常管理為核心，打造適合忙碌現代人的健康方案。
              我們持續優化體驗，未來將加入會員與 VIP 服務，提供個人化支持。
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                精選體態管理方案
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                清晰明確的操作指引
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                支援跨裝置瀏覽
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
