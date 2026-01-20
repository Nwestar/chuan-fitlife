"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById } from "../../../lib/products";

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const item = await fetchProductById(params.id);
        if (!item) {
          router.replace("/products");
          return;
        }
        setProduct(item);
      } catch (error) {
        router.replace("/products");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-sm text-slate-600">載入中...</p>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <Link
          href="/products"
          className="text-sm font-semibold text-brand-700 transition hover:text-brand-800"
        >
          ← 回到商品列表
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-100 shadow-inner sm:h-96">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
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
              <p className="mt-3 text-lg font-semibold text-brand-700">
                NT$ {Number(product.price).toLocaleString()}
              </p>
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
      </section>
    </div>
  );
}
