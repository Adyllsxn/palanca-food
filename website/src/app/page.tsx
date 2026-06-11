// app/page.tsx
"use client";

import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Promo,
  About,
  FoodMenu,
  Cta,
  Delivery,
  Depoimentos,
  Banner,
  Blog,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promo />
        <About />
        <FoodMenu />
        <Cta />
        <Delivery />
        <Depoimentos />
        <Banner />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
