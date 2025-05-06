"use client";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HeroWorkshops from "@/components/heroWorkshops/heroWorkshops";
import CatalogWorkshops from "@/components/catalogWorkshops/catalogWorkshops";
import CloserWorkshops from "@/components/closerWorkshops/closerWorkshops";
import Precios from "@/components/precios/precios";

export default function Workshops() {
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
        <HeroWorkshops id="hero" />
        <CatalogWorkshops/>
        <Precios/>
        <CloserWorkshops/>
        <Footer />
      </main>
    </>
  );
}
