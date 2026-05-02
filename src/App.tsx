/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mascot from './components/Mascot';
import UnionBonfire from './components/UnionBonfire';
import FundraisingCTA from './components/FundraisingCTA';
import Footer from './components/Footer';
import Noise from './components/Noise';
import CustomCursor from './components/CustomCursor';
import { SimplifyEffectsProvider } from './context/SimplifyEffectsContext';

export default function App() {
  return (
    <SimplifyEffectsProvider>
      <div className="min-h-[100dvh] bg-black w-full relative selection:bg-wine/30 selection:text-gold flex flex-col overflow-x-hidden">
        <CustomCursor />
        <Noise />
        <Header />
        <main className="relative z-10 flex flex-col flex-1">
          <Hero />
          <About />
          <Mascot />
          <UnionBonfire />
          <FundraisingCTA />
        </main>
        <Footer />
      </div>
    </SimplifyEffectsProvider>
  );
}
