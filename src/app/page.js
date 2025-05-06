"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Presentation from "@/components/presentation/presentation";
import Services from "@/components/services/services";
import Location from "@/components/location/location";
import Loading from "@/components/loading/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

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
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Hero id="hero" />
            <Presentation />
            <Services />
            <Location />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
