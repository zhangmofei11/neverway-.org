import Head from 'next/head'
import Link from 'next/link'

const features = [
  { title: 'Combat System', desc: 'Fast-paced, Zelda-inspired top-down combat', icon: '⚔️', href: '/combat' },
  { title: 'Farming', desc: 'Grow crops, raise animals, manage your farm', icon: '🌾', href: '/farming' },
  { title: 'Characters', desc: 'Meet 10+ unique characters with their own stories', icon: '👥', href: '/characters' },
  { title: 'Comprehensive Guides', desc: 'From beginner tips to advanced strategies', icon: '📖', href: '/guides' },
]

const gettingStarted = [
  { title: '1. Your Journey Begins', desc: 'Fiona quits her dead-end job and arrives at Montgomery Island. What seemed like a fresh start quickly becomes a nightmare.' },
  { title: '2. Build Your Farm', desc: 'Clear land, plant crops, and manage your homestead. The farm is your lifeline.' },
  { title: '3. Form Bonds', desc: 'Meet 10+ unique islanders. Befriend them, date them, or pursue romance.' },
  { title: '4. Fight the Nightmare', desc: 'Zelda-inspired combat awaits. Explore dungeons, defeat enemies, and uncover the truth.' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Neverway Wiki - Your Ultimate Guide</title>
        <meta name="description" content="Complete guide to Neverway - horror life sim action RPG" />
      </Head>

      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-horror-dark to-horror-purple py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Neverway</h1>
        <p className="text-xl text-gray-300 mb-4">A Horror Life Sim Action RPG</p>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Quitting your dead-end job to start over on a remote island farm sounds peaceful...
          until you become the immortal herald of a dead god.
        </p>
        <div className="flex justify-center gap-4 text-sm mb-8 flex-wrap">
          <span className="bg-horror-accent text-white px-4 py-2 rounded-full">🗓️ October 2026</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">🖥️ PC · Nintendo Switch</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">🏠 Outersloth</span>
        </div>
        <Link href="/guides" className="inline-block bg-horror-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600">
          Get Started
        </Link>
      </section>

      {/* Game Features */}
      <section className="py-16 px-4 bg-horror-purple">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Link key={f.title} href={f.href} className="bg-horror-dark rounded-lg p-6 hover:border-2 border-horror-accent transition-all block">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4 bg-horror-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Getting Started</h2>
          <div className="space-y-6">
            {gettingStarted.map((item) => (
              <div key={item.title} className="bg-horror-purple rounded-lg p-6">
                <h3 className="text-xl font-semibold text-horror-accent mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-16 px-4 bg-horror-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">About the Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-horror-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Coldblood Inc.</h3>
              <p className="text-gray-400">Developer - Independent game studio</p>
            </div>
            <div className="bg-horror-dark rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Outersloth</h3>
              <p className="text-gray-400">Publisher - Known for Night in the Woods, Oxenfree</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-horror-purple border-t border-gray-700 py-8 text-center mt-auto">
        <p className="text-gray-500 text-sm">Neverway Wiki - Fan-made guide. Not affiliated with Coldblood Inc.</p>
      </footer>
    </div>
  )
}
