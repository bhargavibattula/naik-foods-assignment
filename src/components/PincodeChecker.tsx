"use client";

import React, { useState } from "react";
import { checkPincode } from "@/data/products";

export default function PincodeChecker() {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<{
    checked: boolean;
    serviceable: boolean;
    city?: string;
    estimatedDays?: number;
  }>({ checked: false, serviceable: false });

  const handleCheck = () => {
    if (pincode.length === 6) {
      const res = checkPincode(pincode);
      setResult({ checked: true, ...res });
    }
  };

  return (
    <div className="bg-[#f3ead7] rounded-xl p-4 border border-[#d8c9ae]">
      <h3 className="text-sm font-semibold text-[#2b1b12] mb-2 flex items-center gap-2">
        <span>📍</span> Check Delivery Availability
      </h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={pincode}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "").slice(0, 6);
            setPincode(val);
            setResult({ checked: false, serviceable: false });
          }}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          placeholder="Enter pincode"
          className="flex-1 px-3 py-2 rounded-lg border border-[#d8c9ae] bg-white text-sm text-[#2b1b12] placeholder-[#a89580] focus:outline-none focus:ring-2 focus:ring-[#c77b1f] focus:border-transparent"
          maxLength={6}
        />
        <button
          onClick={handleCheck}
          disabled={pincode.length !== 6}
          className="px-4 py-2 bg-[#2b1b12] text-white rounded-lg text-sm font-medium hover:bg-[#5a4636] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Check
        </button>
      </div>

      {result.checked && (
        <div className={`mt-3 p-3 rounded-lg text-sm ${
          result.serviceable
            ? "bg-[#4b6b3a]/10 border border-[#4b6b3a]/20"
            : "bg-[#8a2e20]/10 border border-[#8a2e20]/20"
        }`}>
          {result.serviceable ? (
            <div className="space-y-1">
              <p className="font-semibold text-[#4b6b3a] flex items-center gap-1.5">
                <span>✅</span> Delivery available to {result.city}
              </p>
              <p className="text-xs text-[#5a4636]">
                Estimated delivery: <strong>{result.estimatedDays} day{result.estimatedDays! > 1 ? "s" : ""}</strong>
              </p>
              <p className="text-[10px] text-[#a89580]">
                Free delivery on orders ₹999+
              </p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-[#8a2e20] flex items-center gap-1.5">
                <span>❌</span> Sorry, we don&apos;t deliver to this pincode yet
              </p>
              <p className="text-xs text-[#5a4636] mt-1">
                We&apos;re expanding! Try Mumbai, Pune, Alibag, or major cities.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
