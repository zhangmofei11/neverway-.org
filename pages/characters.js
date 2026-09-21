import Head from 'next/head'
import Link from 'next/link'

const characters = [
  { name: 'Fiona', role: 'Protagonist / The Herald', desc: 'The main character who quits her dead-end job to start over on Montgomery Island. She becomes the immortal herald of a dead god.', icon: '👤' },
  { name: 'Aurora', role: 'Doctor', desc: 'A skilled doctor who runs the island clinic. Kind but mysterious.', icon: '👩‍⚕️' },
  { name: 'Cosmo', role: 'Shopkeeper', desc: 'Runs the general store on the island. Knows everyone and everything.', icon: '🧑‍💼' },
  { name: 'Luna', role: 'Farmer', desc: 'A local farmer who can teach you the basics of island farming.', icon: '🌻' },
]

export default function Characters() {
  return (
    <div className="min-h-screen flex flex-col bg-horror-dark">
      <Head><title>Characters - Neverway Wiki</title></Head>

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

      <main className="flex-1 py-12 px-4 max-w-6xl mx-auto w-full">
        <Link href="/" className="text-horror-accent hover:underline mb-4 block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-white mb-4">Characters</h1>
        <p className="text-gray-400 mb-8">Meet the unique inhabitants of Montgomery Island.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {characters.map((c) => (
            <div key={c.name} className="bg-horror-purple rounded-lg p-6 flex gap-4">
              <span className="text-5xl">{c.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                <p className="text-horror-accent text-sm mb-2">{c.role}</p>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-horror-purple rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-horror-accent mb-4">Relationship System</h2>
          <p className="text-gray-300 mb-4">Build relationships with characters. Your choices matter - truth vs lies affect relationships differently.</p>
          <ul className="space-y-2 text-gray-300">
            <li>❤️ <strong>Friendship:</strong> Spend time with characters to increase friendship</li>
            <li>💕 <strong>Romance:</strong> Pursue romantic relationships with eligible characters</li>
            <li>⚔️ <strong>Combat Abilities:</strong> Unlock new abilities through friendship bonds</li>
          </ul>
        </div>
      </main>

      <footer className="bg-horror-purple border-t border-gray-700 py-8 text-center">
        <p className="text-gray-500 text-sm">Neverway Wiki - Fan-made guide. Not affiliated with Coldblood Inc.</p>
      </footer>
    </div>
  )
}
