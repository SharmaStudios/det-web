"use client";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Games from "@/components/Games";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#050505]">
        {/* Background Ambient Layers */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] opacity-30" />
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>
        
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Infrastructure for the Elite
          </motion.div>

          <h1 className="text-[clamp(3rem,12vw,9rem)] font-display font-black mb-8 tracking-[-0.05em] text-white leading-[0.85] uppercase">
            DETRIOT <br /> 
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>HOSTING</span>
          </h1>

          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-tight">
            Deploy your digital universe on high-performance infrastructure engineered for maximum throughput and zero latency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing" 
              className="px-12 py-6 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
            >
              Get Started
            </motion.a>
            <motion.a 
              whileHover={{ x: 5 }}
              href="#games" 
              className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs"
            >
              Browse Games 
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 text-white/20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Scroll</span>
        </motion.div>
      </section>

      <Games />
      <WhyChooseUs />
      <Pricing />

      {/* Premium CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-card p-20 rounded-[4rem] text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-none">READY TO <br /> <span className="text-primary">ASCEND?</span></h2>
          <p className="text-white/40 max-w-xl mx-auto mb-12 text-lg">Join the thousands of creators and gamers who have already migrated to the Detriot ecosystem.</p>
          <a href="https://dash.detriot.cloud" className="btn-premium inline-block">Initialize Setup</a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
