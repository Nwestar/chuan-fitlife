"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../lib/products";
import { formatPrice } from "../../../src/lib/price";

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const item = await fetchProductById(params.id);
      setProduct(item);
      setLoading(false);
    };

    loadProduct();
  }, [params.id]);

  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <Link
          href="/products"
          className="text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          ← 回到商品列表
        </Link>
        {loading ? (
          <p className="mt-8 text-sm text-slate-600">載入中...</p>
        ) : !product ? (
          <p className="mt-8 text-sm text-slate-600">目前尚無商品資料。</p>
        ) : (
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-100 shadow-inner sm:h-96">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
                  FitLife
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {product.name}
                </h1>
                {(() => {
                  const price = product.price;
                  const isVIP = false;
                  const finalPrice = isVIP ? Math.round(price * 0.9) : price;

                  return (
                    <p className="mt-3 text-lg font-semibold text-brand-700">
                      {formatPrice(finalPrice)}
                    </p>
                  );
                })()}
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                    {product.flavor}風味
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                    {product.weight}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">商品介紹</h2>
                <p className="text-base leading-relaxed text-slate-600">
                  {product.description}
                </p>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">使用方法</h2>
                <p className="text-base leading-relaxed text-slate-600">
                  {product.usage}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
