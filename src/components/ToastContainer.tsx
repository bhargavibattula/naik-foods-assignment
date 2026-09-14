"use client";

import React from "react";
import { useToast } from "@/context/ToastContext";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border animate-slide-in-toast min-w-[280px] max-w-[380px] ${
            toast.type === "success"
              ? "bg-[#4b6b3a] text-white border-[#4b6b3a]"
              : toast.type === "warning"
              ? "bg-[#c77b1f] text-white border-[#c77b1f]"
              : "bg-[#2b1b12] text-[#f3ead7] border-[#5a4636]"
          }`}
        >
          {toast.icon && <span className="text-lg shrink-0">{toast.icon}</span>}
          <p className="text-sm font-medium flex-1">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 opacity-60 hover:opacity-100 transition-opacity text-lg leading-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
