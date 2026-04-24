"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Clock, Rocket } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Enterprise DDoS Protection",
    desc: "Our 12Tbps+ capacity network ensures your server stays online even under heavy attacks."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "NVMe Gen4 Storage",
    desc: "Load chunks and database assets instantly with the latest SSD technology."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "99.9% Uptime SLA",
    desc: "Reliability is our priority. We guarantee minimal downtime for your community."
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Instant Provisioning",
    desc: "No waiting. Your server is deployed automatically the moment your payment is confirmed."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">ENGINEERED FOR <span className="text-primary">DOMINANCE</span></h2>
          <p className="text-gray-400">Why thousands of gamers trust Detriot for their infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
