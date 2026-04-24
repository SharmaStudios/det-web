"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">GET IN <span className="text-primary">TOUCH</span></h1>
              <p className="text-gray-400 text-lg mb-12">Have questions about our infrastructure? Our technical team is ready to assist you 24/7.</p>
              
              <div className="space-y-8">
                <ContactInfo icon={<Mail className="w-6 h-6 text-primary" />} title="Email Support" detail="support@detriot.cloud" />
                <ContactInfo icon={<MessageSquare className="w-6 h-6 text-primary" />} title="Live Chat" detail="Available on our Discord server" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="John Doe" />
                <InputGroup label="Email Address" placeholder="john@example.com" />
              </div>
              <InputGroup label="Subject" placeholder="General Inquiry" />
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary/50 focus:ring-0 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full py-5 rounded-xl bg-primary text-black font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary/80 transition-all">
                <Send className="w-4 h-4" /> Send Transmission
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ContactInfo({ icon, title, detail }: { icon: any, title: string, detail: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-gray-400 text-sm">{detail}</p>
      </div>
    </div>
  )
}

function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{label}</label>
      <input 
        type="text" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary/50 focus:ring-0 transition-all"
        placeholder={placeholder}
      />
    </div>
  )
}
