"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "py-4 px-6 md:px-20" : "py-8 px-6 md:px-20"
      }`}
    >
      <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ${
        isScrolled ? "bg-black/40 backdrop-blur-2xl px-8 py-3 rounded-full border border-white/5" : ""
      }`}>
        <Link href="/" className="flex items-center gap-4 group">
          <img src="https://panel.detriot.cloud/logo.png" alt="Logo" className="h-8 group-hover:rotate-[360deg] transition-transform duration-1000" />
          <span className="font-display text-lg font-bold tracking-tighter text-white">DETRIOT</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-12">
          {["Games", "Pricing", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={item === "Contact" ? "/contact" : `/#${item.toLowerCase()}`}
              className="text-[10px] font-black text-white/40 hover:text-white transition-all uppercase tracking-[0.3em]"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href="https://panel.detriot.cloud" 
            className="text-[10px] font-black text-white uppercase tracking-[0.3em] hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="https://dash.detriot.cloud" 
            className="px-8 py-3 text-[10px] font-black bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all uppercase tracking-[0.3em]"
          >
            Deploy
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
