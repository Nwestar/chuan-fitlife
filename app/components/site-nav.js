"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const sectionLinks = [
  { label: "關於我們", id: "about" },
  { label: "店面資訊", id: "locations" },
  { label: "聯絡我們", id: "contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  const handleSectionClick = (id) => {
    if (pathname === "/") {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    router.push(`/#${id}`);
  };

  const handleProductsClick = () => {
    router.push("/products");
  };

  return (
    <div className="flex items-center gap-6">
      <button
        type="button"
        onClick={handleProductsClick}
        className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
      >
        商品
      </button>
      {sectionLinks.map((link) => (
        <button
          key={link.id}
          type="button"
          onClick={() => handleSectionClick(link.id)}
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
