import { JSX } from "react";
import CTA from "./components/sections/CTA";
import FAQ from "./components/sections/FAQ";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Results from "./components/sections/Results";
import Services from "./components/sections/Services";
import SocialProof from "./components/sections/SocialProof";
import Testimonials from "./components/sections/Testimonials";
import Layout from "./components/layout/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="SleekSites Kenya - High-Converting Websites & Digital Marketing"
      description="Get a results-driven website + marketing strategy that generates leads and grows your business. 127+ Kenyan clients. Free strategy call available."
    >
      <Hero />
      <SocialProof />
      <Services />
      <Results />
      <Portfolio />
      <Testimonials />
      <CTA />
      <FAQ />
    </Layout>
  );
}
