import DragonBackground from './components/DragonBackground';
import DragonOverlay from './components/DragonOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Plans from './components/Plans';
import MarketingPlans from './components/MarketingPlans';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <DragonBackground />
      <DragonOverlay />
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Plans />
        <MarketingPlans />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
