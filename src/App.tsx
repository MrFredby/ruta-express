import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrackingForm from './components/TrackingForm';
import QuoteForm from './components/QuoteForm';
import Coverage from './components/Coverage';
import Metrics from './components/Metrics';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Metrics />
      <Services />
      <TrackingForm />
      <QuoteForm />
      <Coverage />
      <Testimonials />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;