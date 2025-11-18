import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'

function App() {
  const [category, setCategory] = useState('')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero onShopClick={() => {
        const el = document.getElementById('categories')
        el?.scrollIntoView({behavior:'smooth'})
      }} />
      <Categories onSelect={(c)=>setCategory(c)} />
      <div id="featured">
        <ProductGrid category={category} />
      </div>
      <footer id="footer" className="border-t bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="font-bold text-slate-900 mb-2">AllHats</div>
            <p>Premium headwear for every adventure.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Shop</div>
            <ul className="space-y-1">
              <li><button onClick={()=>setCategory('Women')} className="hover:underline">Women</button></li>
              <li><button onClick={()=>setCategory('Surfer')} className="hover:underline">Surfer</button></li>
              <li><button onClick={()=>setCategory('Golfer')} className="hover:underline">Golfer</button></li>
              <li><button onClick={()=>setCategory('Cowboy')} className="hover:underline">Cowboy</button></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Support</div>
            <ul className="space-y-1">
              <li>Shipping & Returns</li>
              <li>Warranty</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Newsletter</div>
            <p className="mb-3">Get style drops and exclusive offers.</p>
            <div className="flex">
              <input placeholder="Your email" className="flex-1 px-3 py-2 rounded-l-lg border"/>
              <button className="px-4 py-2 rounded-r-lg bg-slate-900 text-white">Join</button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-6">© {new Date().getFullYear()} AllHats Co.</div>
      </footer>
    </div>
  )
}

export default App
