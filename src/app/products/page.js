"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../lib/products";

export const metadata = {
  title: "FitLife | 商品列表",
};

const statusLabelMap = {
  active: "上架中",
  inactive: "已下架",
  draft: "草稿",
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const items = await fetchProducts();
        setProducts(items);
      } catch (error) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="bg-slate-50">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Products
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            商品列表
          </h1>
          <p className="text-base text-slate-600">
            精選健康補給與服務方案，支持不同生活節奏與體態管理需求。
          </p>
        </div>

        {loading ? (
          <p className="text-sm text-slate-600">載入中...</p>
        ) : products.length === 0 ? (
          <p className="text-sm text-slate-600">目前尚無商品資料。</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <Image
                    src={product.imageUrl || "/images/lean-reset.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-brand-600">
                    <span>健康補給</span>
                    {product.status ? (
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold text-brand-700">
                        {statusLabelMap[product.status] ?? product.status}
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {product.flavor ? `${product.flavor}風味` : ""}
                      {product.flavor && product.weight ? " · " : ""}
                      {product.weight}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600">
                    {product.description || "專為體態管理設計的健康補給方案。"}
                  </p>
                  <div className="mt-auto text-base font-semibold text-brand-700">
                    NT$ {Number(product.price).toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
