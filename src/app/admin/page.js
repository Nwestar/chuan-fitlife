"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useAuth } from "../../context/auth-context";

export default function AdminPage() {
  const { user, role, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user || role !== "admin") {
      router.replace("/");
      return;
    }

    const fetchAdminProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const items = snapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
        setProducts(items);
      } catch (error) {
        setProducts([]);
      } finally {
        setDataLoading(false);
      }
    };

    fetchAdminProducts();
  }, [loading, user, role, router]);

  if (loading || (user && role !== "admin")) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-sm text-slate-600">正在驗證權限...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Admin Dashboard
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">商品管理</h1>
          <p className="text-base text-slate-600">
            管理 Firestore 商品資料，預留會員與 VIP 權限擴充。
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          {dataLoading ? (
            <p className="text-sm text-slate-600">載入中...</p>
          ) : products.length === 0 ? (
            <p className="text-sm text-slate-600">目前尚無商品資料。</p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {product.name}
                      </h2>
                      <p className="text-sm text-slate-600">
                        NT$ {Number(product.price).toLocaleString()}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                      {product.status ?? "商品管理"}
                    </span>
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-slate-600">
                    <p>風味：{product.flavor ?? "-"}</p>
                    <p>重量：{product.weight ?? "-"}</p>
                    <p>描述：{product.description ?? "-"}</p>
                    <p>使用方法：{product.usage ?? "-"}</p>
                    <p>圖片：{product.imageUrl ?? product.image ?? "-"}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
