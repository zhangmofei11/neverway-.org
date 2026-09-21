import Head from 'next/head'
import Link from 'next/link'

export default function Combat() {
  return (
    <div className="min-h-screen flex flex-col bg-horror-dark">
      <Head><title>Combat - Neverway Wiki</title></Head>
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
        <h1 className="text-4xl font-bold text-white mb-4">Combat System</h1>
        <p className="text-gray-400 mb-8">Fast-paced, Zelda-inspired top-down combat. Master your weapons, time your attacks.</p>
        <div className="bg-horror-purple rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-horror-accent mb-4">Combat Overview</h2>
          <p className="text-gray-300">Combat in Neverway emphasizes player expression and tactical thinking. Choose your weapons, craft items, and unlock abilities through friendship bonds.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['⚔️ Melee', '🏹 Ranged', '🛡️ Defense', '✨ Abilities'].map(item => (
            <div key={item} className="bg-horror-purple p-4 rounded-lg text-center">{item}</div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-horror-purple rounded-lg p-6"><h3 className="text-xl font-semibold text-white mb-3">🎯 Player Expression</h3><p className="text-gray-400 text-sm">Aggressive, defensive, or tactical - multiple approaches to every encounter.</p></div>
          <div className="bg-horror-purple rounded-lg p-6"><h3 className="text-xl font-semibold text-white mb-3">🔗 Friendship Bonds</h3><p className="text-gray-400 text-sm">Build relationships to unlock unique combat abilities.</p></div>
        </div>
      </main>
      <footer className="bg-horror-purple border-t border-gray-700 py-8 text-center"><p className="text-gray-500 text-sm">Neverway Wiki - Fan-made guide. Not affiliated with Coldblood Inc.</p></footer>
    </div>
  )
}
