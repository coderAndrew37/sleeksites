import { client } from "@/lib/sanity";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import Services from "./components/sections/Services";
import Results from "./components/sections/Results";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import { BlogSection } from "./components/sections/BlogSection";
import CTA from "./components/sections/CTA";
import FAQ from "./components/sections/FAQ";
import Layout from "./components/layout/Layout";

export default async function Home() {
  const blogPostsQuery = `*[_type == "post" && publishedAt < now()] 
    | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      "author": author->{
        name,
        role
      },
      "categories": categories[]->{
        title,
        slug
      }
    }`;

  const blogPosts = await client.fetch(
    blogPostsQuery,
    {},
    { next: { revalidate: 3600 } }
  );

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
      <BlogSection posts={blogPosts} />
      <CTA />
      <FAQ />
    </Layout>
  );
}
