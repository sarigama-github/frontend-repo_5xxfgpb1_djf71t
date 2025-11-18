import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur bg-white/70 border-b border-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="w-8 h-8"/>
            <span className="font-extrabold tracking-tight text-slate-900">AllHats</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#categories" className="hover:text-slate-900">Categories</a>
            <a href="#featured" className="hover:text-slate-900">Featured</a>
            <a href="#footer" className="hover:text-slate-900">Contact</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-white"><Menu size={20}/></button>
        </div>
      </div>
    </header>
  )
}
