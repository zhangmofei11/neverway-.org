import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-horror-dark">
      <Head><title>About - Neverway Wiki</title></Head>
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
        <h1 className="text-4xl font-bold text-white mb-8">About Neverway</h1>
        <div className="bg-horror-purple rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-horror-accent mb-4">Game Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['Developer', 'Coldblood Inc.'],
              ['Publisher', 'Outersloth'],
              ['Release', 'October 2026'],
              ['Platforms', 'PC, Switch'],
              ['Genre', 'Horror RPG'],
              ['Rating', '16+'],
            ].map(([label, value]) => (
              <div key={label} className="bg-horror-dark p-4 rounded-lg text-center">
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-white font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-horror-purple rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-horror-accent mb-4">Development Team</h2>
          <div className="space-y-4">
            <div className="bg-horror-dark rounded-lg p-6 border-l-4 border-horror-accent">
              <h3 className="text-xl font-semibold text-white">Pedro Medeiros</h3>
              <p className="text-gray-400 text-sm">Co-director - Former pixel artist for Celeste</p>
            </div>
            <div className="bg-horror-dark rounded-lg p-6 border-l-4 border-horror-accent">
              <h3 className="text-xl font-semibold text-white">Disasterpeace</h3>
              <p className="text-gray-400 text-sm">Composer - Known for Fez and Hyper Light Drifter</p>
            </div>
          </div>
        </div>
        <div className="bg-horror-purple rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-horror-accent mb-4">About This Wiki</h2>
          <p className="text-gray-300">This is a fan-made wiki for Neverway. We are not affiliated with Coldblood Inc. or Outersloth.</p>
        </div>
      </main>
      <footer className="bg-horror-purple border-t border-gray-700 py-8 text-center">
        <p className="text-gray-500 text-sm">Neverway Wiki - Fan-made guide. Not affiliated with Coldblood Inc.</p>
      </footer>
    </div>
  )
}
