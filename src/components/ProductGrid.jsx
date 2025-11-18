import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid({ category }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function run() {
      try {
        setLoading(true)
        const seed = await fetch(`${backend}/api/seed`).then(r=>r.json()).catch(()=>null)
        const url = new URL(`${backend}/api/hats`)
        if (category) url.searchParams.set('category', category)
        const data = await fetch(url).then(r=>r.json())
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [category])

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex items-end justify-between mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Featured Hats{category?` · ${category}`:''}</h3>
        <div className="text-sm text-slate-600">{items.length} products</div>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({length:8}).map((_,i)=> (
            <div key={i} className="h-72 rounded-2xl bg-slate-200 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition">
              <div className="aspect-square overflow-hidden">
                <img src={item.images?.[0] || 'https://picsum.photos/600'} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition"/>
              </div>
              <div className="p-4">
                <div className="text-sm text-slate-500">{item.category}</div>
                <div className="font-semibold text-slate-900 truncate">{item.title}</div>
                <div className="mt-1 flex items-center justify-between">
                  <div className="text-amber-700 font-bold">${'{'}item.price.toFixed(2){'}'}</div>
                  <button className="text-sm px-3 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
