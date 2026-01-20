import Image from "next/image";
import Link from "next/link";
import { getProducts } from "../../lib/products";

export const metadata = {
  title: "FitLife | 商品列表",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="bg-slate-50">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Products
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            商品列表
          </h1>
          <p className="text-base text-slate-600">
            精選健康與體態管理方案，適合不同生活節奏與訓練需求。
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  {product.name}
                </h2>
                <p className="text-sm text-slate-600">{product.description}</p>
                <div className="mt-auto text-base font-semibold text-brand-600">
                  NT$ {product.price.toLocaleString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
