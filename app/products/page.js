"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../src/lib/products";
import { formatPrice } from "../../src/lib/price";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const items = await fetchProducts();
      setProducts(items);
      setLoading(false);
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
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const price = product.price;
              const isVIP = false;
              const finalPrice = isVIP ? Math.round(price * 0.9) : price;

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="text-xs uppercase tracking-[0.2em] text-brand-600">
                      健康補給
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        {product.flavor}風味 · {product.weight}
                      </p>
                    </div>
                    <div className="mt-auto text-base font-semibold text-brand-700">
                      {formatPrice(finalPrice)}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
