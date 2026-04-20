import Layout from './components/Layout';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';

function App() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
    </Layout>
  );
}

export default App;