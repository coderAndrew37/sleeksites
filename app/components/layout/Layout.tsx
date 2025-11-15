import Head from "next/head";
import { JSX } from "react";
import Header from "./Header";
import { LayoutProps } from "../types/Index";
import Footer from "./Footer";

export default function Layout({
  children,
  title,
  description,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {title || "SleekSites Kenya - Web Design, SEO & Digital Marketing"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Professional web design, SEO, Facebook Ads and Google Ads services in Kenya. Grow your business online with SleekSites."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
