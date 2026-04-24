"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const games = [
  { name: "Minecraft", image: "/images/minecraft.png", desc: "Infinite worlds, zero lag. Premium Java & Bedrock support." },
  { name: "Counter-Strike", image: "/images/csgo.png", desc: "Competitive grade performance. 128 Tickrate optimized." },
  { name: "Rust", image: "/images/rust.png", desc: "Survive on high-frequency hardware. NVMe Gen4 standard." },
  { name: "GTA V / FiveM", image: "/images/gta.png", desc: "Power your roleplay empire with dedicated resources." },
];

function GameCard({ game, i }: { game: any, i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5 bg-neutral-900"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"
        style={{ backgroundImage: `url(${game.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end translate-z-20" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-3xl font-display font-black mb-3 text-white group-hover:text-primary transition-colors">{game.name}</h3>
        <p className="text-white/40 text-sm max-w-xs leading-relaxed mb-8">{game.desc}</p>
        
        <div className="flex items-center gap-4">
           <div className="h-px flex-grow bg-white/10" />
           <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Configure</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Games() {
  return (
    <section id="games" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-display font-black mb-6 leading-[0.8]"
          >
            SELECT YOUR <br /> <span className="text-primary">ENVIRONMENT</span>
          </motion.h2>
          <p className="text-white/40 text-lg max-w-xl">Curated instances for the world's most demanding titles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {games.map((game, i) => (
            <GameCard key={game.name} game={game} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
