const categories = [
  { name: 'Women', color: 'from-rose-400 to-pink-500', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Surfer', color: 'from-sky-400 to-cyan-500', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Golfer', color: 'from-emerald-400 to-lime-500', image: 'https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXb21lbnxlbnwwfDB8fHwxNzYzNTA2ODU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Cowboy', color: 'from-amber-500 to-orange-600', image: 'https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXb21lbnxlbnwwfDB8fHwxNzYzNTA2ODU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Categories({ onSelect }) {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Shop by Category</h2>
        <div className="text-slate-600 text-sm">Click a card to filter</div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <button key={c.name} onClick={() => onSelect?.(c.name)} className="group relative overflow-hidden rounded-2xl shadow hover:shadow-xl transition block text-left">
            <img src={c.image} alt={c.name} className="h-56 w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
            <div className="absolute bottom-4 left-4">
              <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${c.color} shadow-lg`}>{c.name}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
