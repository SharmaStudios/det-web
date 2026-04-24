"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, HardDrive, Database, ShieldCheck, RefreshCw } from "lucide-react";

interface Plan {
  id: number;
  name: string;
  price: number;
  specs: {
    ram_gb: number;
    ram_mb: number;
    cpu_cores: number;
    cpu_percent: number;
    disk_gb: number;
    disk_mb: number;
  };
  features: {
    backups: number;
  };
  billing_period: string;
  is_out_of_stock: boolean;
}

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/plans")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPlans(data.plans);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20 text-primary font-mono animate-pulse">DECRYPTING PRICE LIST...</div>;

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">FORCEFUL <span className="text-primary">PRICING</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">High-caliber hardware at prices that don't compromise your budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-2xl flex flex-col border border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden ${i === 1 ? 'ring-2 ring-secondary/50' : ''} ${plan.is_out_of_stock ? 'opacity-80' : ''}`}
            >
              {i === 1 && !plan.is_out_of_stock && <div className="absolute top-4 right-4 bg-secondary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter animate-pulse">RECOMMENDED</div>}
              {plan.is_out_of_stock && <div className="absolute top-4 right-4 bg-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter shadow-[0_0_20px_rgba(220,38,38,0.4)]">OUT OF STOCK</div>}
              
              <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">$ {plan.price.toFixed(2)}</span>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">/ {plan.billing_period}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <SpecItem icon={<Cpu className="w-4 h-4 text-primary" />} label="Compute" value={plan.specs.cpu_cores ? `${plan.specs.cpu_cores} Cores` : `${plan.specs.cpu_percent}% CPU`} />
                <SpecItem icon={<Database className="w-4 h-4 text-primary" />} label="Memory" value={plan.specs.ram_gb >= 1 ? `${plan.specs.ram_gb} GB` : `${plan.specs.ram_mb} MB`} />
                <SpecItem icon={<HardDrive className="w-4 h-4 text-primary" />} label="Storage" value={plan.specs.disk_gb >= 1 ? `${plan.specs.disk_gb} GB` : `${plan.specs.disk_mb} MB`} />
                <SpecItem icon={<RefreshCw className="w-4 h-4 text-primary" />} label="Backups" value={`${plan.features.backups}`} />
              </div>

              <LinkBtn href={`https://dash.detriot.cloud/dashboard/checkout/${plan.id}`} primary={i === 1} disabled={plan.is_out_of_stock} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecItem({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-3 text-gray-400">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-bold text-white">{value}</span>
    </div>
  )
}

function LinkBtn({ href, primary, disabled }: { href: string, primary: boolean, disabled?: boolean }) {
  if (disabled) {
    return (
      <div className="w-full py-4 rounded-xl text-center font-bold uppercase tracking-widest bg-white/5 text-white/20 border border-white/5 cursor-not-allowed">
        Sold Out
      </div>
    );
  }
  return (
    <a 
      href={href} 
      className={`w-full py-4 rounded-xl text-center font-bold uppercase tracking-widest transition-all ${
        primary 
        ? "bg-primary text-black shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.5)] hover:scale-[1.02]" 
        : "bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      Deploy Now
    </a>
  )
}
