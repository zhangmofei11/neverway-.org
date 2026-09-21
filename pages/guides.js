import Head from 'next/head'
import Link from 'next/link'

const guides = [
  { title: 'Getting Started', desc: 'Learn the basics - movement, controls, and first steps', icon: '📖' },
  { title: 'Combat Guide', desc: 'Master timing, combos, weapons, and abilities', icon: '⚔️' },
  { title: 'Farming Guide', desc: 'Build your farm - crops, animals, upgrades', icon: '🌾' },
  { title: 'Characters & Relationships', desc: 'Meet all characters, build friendships, romance', icon: '👥' },
  { title: 'Crafting & Cooking', desc: 'Create items and cook meals for buffs', icon: '🔨' },
  { title: 'The Herald', desc: 'Understand the core story mechanic', icon: '✨' },
]

export default function Guides() {
  return (
    <div className="min-h-screen flex flex-col bg-horror-dark">
      <Head><title>Guides - Neverway Wiki</title></Head>
      <nav className="bg-horror-purple border-b-2 border-horror-accent sticky top-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-horror-accent">Neverway</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-horror-accent">Home</Link>
            <Link href="/characters" className="text-gray-300 hover:text-horror-accent">Characters</Link>
            <Link href="/guides" className="text-gray-300 hover:text-horror-accent">Guides</Link>
            <Link href="/combat" className="text-gray-300 hover:text-horror-accent">Combat</Link>
            <Link href="/farming" className="text-gray-300 hover:text-horror-accent">Farming</Link>
            <Link href="/about" className="text-gray-300 hover:text-horror-accent">About</Link>
          </div>
        </div>
      </nav>
      <main className="flex-1 py-12 px-4 max-w-6xl mx-auto w-full">
        <Link href="/" className="text-horror-accent hover:underline mb-4 block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-white mb-4">Guides</h1>
        <p className="text-gray-400 mb-8">Complete guides for mastering Neverway.</p>
        <div className="bg-gradient-to-r from-horror-purple to-horror-dark rounded-lg p-8 mb-12 border-l-4 border-horror-accent">
          <h2 className="text-2xl font-bold text-white mb-2">Start Here: Beginners Guide</h2>
          <p className="text-gray-300 mb-4">New to Neverway? Start with our comprehensive beginners guide.</p>
          <button className="bg-horror-accent text-white px-6 py-3 rounded-lg font-semibold">Read Beginners Guide</button>
        </div>
        <h2 className="text-2xl font-semibold text-horror-accent mb-6">All Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map(g => (
            <div key={g.title} className="bg-horror-purple rounded-lg p-6 hover:border-2 border-horror-accent transition-all">
              <span className="text-4xl mb-4 block">{g.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{g.title}</h3>
              <p className="text-gray-400 text-sm">{g.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-horror-purple border-t border-gray-700 py-8 text-center">
        <p className="text-gray-500 text-sm">Neverway Wiki - Fan-made guide. Not affiliated with Coldblood Inc.</p>
      </footer>
    </div>
  )
}
