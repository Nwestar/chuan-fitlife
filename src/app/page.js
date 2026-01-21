import Link from "next/link";

const highlights = [
  {
    title: "科學化健康補給",
    description:
      "由專業團隊研擬的營養與管理方案，協助維持穩定體能與代謝節奏。",
  },
  {
    title: "專業服務導向",
    description:
      "整合訓練、恢復與生活管理，打造可長期執行的體態改善流程。",
  },
  {
    title: "實體據點支援",
    description:
      "規劃中的實體健身房據點，提供面對面諮詢與進階課程服務。",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            FitLife Wellness
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            科學健康管理，打造長期體態
          </h1>
          <p className="text-lg text-slate-600">
            FitLife 以專業團隊與數據導向的管理系統，提供健康補給與服務方案，
            讓你在忙碌生活中依然保持最佳狀態。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="inline-flex w-fit items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
            >
              查看商品
            </Link>
            <Link
              href="#locations"
              className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              了解據點規劃
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">
                健康產業專業平台
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                從健康評估、日常管理到體態優化，FitLife 提供一致且可信任的流程，
                協助你建立長期可持續的健康計畫。
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  專業顧問團隊
                </div>
                <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  健康數據管理
                </div>
                <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  個人化方案設計
                </div>
                <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  會員服務擴充
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Solutions
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">健康補給與服務</h2>
            <p className="text-base text-slate-600">
              以服務導向為核心，串聯商品與專業計畫，提供完整的健康管理體驗。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              About FitLife
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">品牌理念</h2>
            <p className="text-base leading-relaxed text-slate-600">
              FitLife 強調專業與科學基礎，透過整合健康補給、訓練設計與日常
              管理工具，協助會員建立可持續的體態管理策略。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              未來將導入會員與 VIP 方案，提供更精準的數據追蹤與顧問服務，打造
              信任感與長期陪伴的健康管理平台。
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="space-y-3 rounded-2xl bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">專業核心</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>・健康數據追蹤與成效回饋</li>
                <li>・專業團隊與科學訓練流程</li>
                <li>・跨裝置服務整合與會員支持</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Locations
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              實體健身房據點（即將開幕）
            </h2>
            <p className="text-base text-slate-600">
              預計提供一對一諮詢、團體課程與進階訓練場域，完善線上線下服務。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">台北旗艦據點</h3>
              <p className="mt-2 text-sm text-slate-600">地址：台北市信義區示範路 88 號</p>
              <p className="mt-2 text-sm text-slate-600">營業時間：每日 09:00 - 22:00</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">台中概念館</h3>
              <p className="mt-2 text-sm text-slate-600">地址：台中市西屯區示範路 26 號</p>
              <p className="mt-2 text-sm text-slate-600">營業時間：每日 10:00 - 21:00</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">聯絡我們</h2>
            <p className="mt-3 text-base text-slate-600">
              想了解合作或會員服務，歡迎來信，我們將提供專人諮詢。
            </p>
            <div className="mt-6 text-sm font-semibold text-brand-700">
              service@fitlife.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
