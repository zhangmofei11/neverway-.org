import Head from 'next/head'
import Link from 'next/link'

export default function Farming() {
  return (
    <div className="min-h-screen flex flex-col bg-horror-dark">
      <Head><title>Farming - Neverway Wiki</title></Head>
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
      <main className="flex-1 py-12 px-4 max-w-4xl mx-auto w-full">
        <Link href="/" className="text-horror-accent hover:underline mb-4 block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-white mb-4">Farming System</h1>
        <p className="text-gray-400 mb-8">The farm is your lifeline in Neverway. Grow crops, raise animals, and manage your homestead.</p>
        <div className="bg-horror-purple rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-horror-accent mb-4">Core Farming</h2>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>🌱<br/><span className="text-white">Crops</span></div>
            <div>🐄<br/><span className="text-white">Animals</span></div>
            <div>🏠<br/><span className="text-white">Homestead</span></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['🌅 Morning', '☀️ Afternoon', '🌙 Evening', '⭐ Night'].map(t => (
            <div key={t} className="bg-horror-purple p-4 rounded-lg text-center text-gray-400 text-sm">{t}</div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-horror-purple rounded-lg p-6">🎣<br/><h3 className="text-white font-semibold mt-2">Fishing</h3><p className="text-gray-400 text-sm mt-1">Catch fish for food and income.</p></div>
          <div className="bg-horror-purple rounded-lg p-6">🍳<br/><h3 className="text-white font-semibold mt-2">Cooking</h3><p className="text-gray-400 text-sm mt-1">Cook meals for buffs and profit.</p></div>
          <div className="bg-horror-purple rounded-lg p-6">🔨<br/><h3 className="text-white font-semibold mt-2">Crafting</h3><p className="text-gray-400 text-sm mt-1">Create tools and equipment.</p></div>
        </div>
      </main>
      <footer className="bg-horror-purple border-t border-gray-700 py-8 text-center"><p className="text-gray-500 text-sm">Neverway Wiki - Fan-made guide. Not affiliated with Coldblood Inc.</p></footer>
    </div>
  )
}
