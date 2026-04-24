import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <img src="https://panel.detriot.cloud/logo.png" alt="Logo" className="h-8" />
            <span className="font-mono text-lg font-bold tracking-tighter text-white neon-glow">DETRIOT</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed">
            Leading the charge in premium game server infrastructure. Built for the next generation of online communities.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Infrastructure</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/#games" className="hover:text-cyan-400 transition-colors">Game Hosting</Link></li>
            <li><Link href="/#pricing" className="hover:text-cyan-400 transition-colors">VPS Hosting</Link></li>
            <li><Link href="/#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/#why-us" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
               <span className="font-bold">D</span>
             </a>
             <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all">
               <span className="font-bold">X</span>
             </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs uppercase tracking-widest">© 2024 DETRIOT HOSTING. POWERED BY NEON.</p>
        <div className="flex gap-8 text-xs text-gray-600 font-bold uppercase tracking-widest">
           <Link href="#">Privacy</Link>
           <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
