import { motion } from 'framer-motion'

export default function Hero({ onShopClick }) {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100"/>
      <div className="absolute inset-0 opacity-40" style={{backgroundImage:'radial-gradient(800px 400px at 10% 10%, rgba(255,200,150,0.5), transparent), radial-gradient(600px 300px at 90% 30%, rgba(100,200,255,0.5), transparent)'}}/>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6}}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-rose-700 to-sky-700"
          >
            Hats for Every Story
          </motion.h1>
          <motion.p
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.1, duration:0.6}}
            className="mt-5 text-lg leading-8 text-slate-700"
          >
            From sun-kissed shores to midnight rodeos, find the perfect fit for surfers, golfers, cowboys, and everyday icons.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onShopClick} className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold shadow hover:shadow-lg hover:bg-amber-700 transition">Shop Collection</button>
            <a href="#categories" className="px-6 py-3 rounded-xl bg-white/70 backdrop-blur border border-white text-slate-900 font-semibold hover:bg-white transition">Explore Categories</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div>Free shipping over $75</div>
            <div className="w-1 h-1 rounded-full bg-slate-400"/>
            <div>30-day returns</div>
          </div>
        </div>
        <motion.div
          initial={{opacity:0, scale:0.95}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.7}}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/40">
            <img src="https://images.unsplash.com/photo-1672358580875-45b688ae9701?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZXJvJTIwaGF0fGVufDB8MHx8fDE3NjM1MDY4NTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hero hat" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl shadow p-4 w-48 border border-slate-200">
            <div className="text-sm font-semibold">Bestseller</div>
            <div className="text-xs text-slate-600">Loved by 2,000+ customers</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
