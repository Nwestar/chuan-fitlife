"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../context/auth-context";

export default function LoginPage() {
  const { user, role } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStatus({ type: "success", message: "登入成功。" });
    } catch (error) {
      setStatus({ type: "error", message: "登入失敗，請確認帳號密碼。" });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setStatus(null);
    try {
      await signOut(auth);
      setStatus({ type: "success", message: "已登出。" });
    } catch (error) {
      setStatus({ type: "error", message: "登出失敗，請稍後再試。" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-lg px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">會員登入</h1>
          <p className="mt-2 text-sm text-slate-600">
            使用 Email 與密碼登入，進行會員或後台管理操作。
          </p>

          {user ? (
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white p-4 text-sm text-slate-600">
                <p>目前登入：{user.email}</p>
                <p>角色：{role ?? "member"}</p>
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                disabled={loading}
              >
                {loading ? "處理中..." : "登出"}
              </button>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium text-slate-700"
                  htmlFor="password"
                >
                  密碼
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  placeholder="輸入密碼"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                disabled={loading}
              >
                {loading ? "登入中..." : "登入"}
              </button>
            </form>
          )}

          {status && (
            <p
              className={`mt-4 text-sm ${
                status.type === "success" ? "text-brand-700" : "text-rose-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
