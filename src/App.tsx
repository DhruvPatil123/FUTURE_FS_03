/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import SpecialOffers from "./components/SpecialOffers";
import About from "./components/About";
import Stats from "./components/Stats";
import TradeInProcess from "./components/TradeInProcess";
import Gallery from "./components/Gallery";
import InstagramFeed from "./components/InstagramFeed";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <FeaturedProducts />
        <SpecialOffers />
        <About />
        <Stats />
        <TradeInProcess />
        <Gallery />
        <Reviews />
        <FAQ />
        <InstagramFeed />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}
