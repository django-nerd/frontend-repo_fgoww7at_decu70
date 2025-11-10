import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] dark:bg-[#0b0f1a] text-zinc-900 dark:text-zinc-100 antialiased">
      {/* Ambient background with subtle circuit-like pattern */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(109,40,217,0.25),transparent),radial-gradient(800px_400px_at_90%_20%,rgba(14,165,233,0.15),transparent)]" />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '32px 32px, 32px 32px', backgroundPosition: '0 -1px, -1px 0' }} />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
