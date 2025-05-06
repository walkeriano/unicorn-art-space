"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HeroMarketing from "@/components/heroMarketing/heroMarketing";
import CatalogMarketing from "@/components/catalogMarketing/catalogMarketing";
import CloserMarketing from "@/components/closerMarketing/closerMarketing";

export default function MarketingDigital() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Quesada Coach App - Planes de entrenamiento y nutrición personalizados
          creados por expertos
        </title>
        <meta
          name="description"
          content="Descubre Quesada Coach App, Planes de entrenamiento y nutrición personalizados creados por
            expertos, diseñados para transformar tu cuerpo y tu vida"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <HeroMarketing id="hero" />
        <CatalogMarketing/>
        <CloserMarketing/>
        <Footer />
      </main>
    </>
  );
}
