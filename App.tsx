
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCatalog from './components/ServiceCatalog';
import Architecture from './components/Architecture';
import GoToMarket from './components/GoToMarket';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceCatalog />
        <Architecture />
        <GoToMarket />
      </main>
      <Footer />
    </div>
  );
};

export default App;
