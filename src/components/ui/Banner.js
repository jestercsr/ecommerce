import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center relative">
        <img src="/Promotion.webp" alt="Banner" className="w-full h-[300px] md:h-[400px] lg:h-[600px]" />
        <Link href="/products/promotions">
          <button className="absolute bottom-2 bg-[#fd4607] hover:bg-[#BB3406] text-slate-50 p-2 rounded-full left-[50%] lg:p-3 lg:bottom-10">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
