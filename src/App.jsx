import Layout from './components/Layout';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ContactSection />
    </Layout>
  );
}

export default App;