import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold text-slate-900">找不到內容</h1>
        <p className="mt-3 text-base text-slate-600">
          你想查看的商品不存在，請返回列表重新選擇。
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          回到商品列表
        </Link>
      </div>
    </div>
  );
}
