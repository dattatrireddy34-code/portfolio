import Header from './layout/layout/Header';
import Footer from './layout/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden flex flex-col">
      {/* Decorative background dots/stars to simulate space */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <Header />
      
      <main className="relative z-10 flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App