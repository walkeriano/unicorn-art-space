import React, { useState, useEffect, useRef } from "react";
import styles from "./catalogAudiovisual.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CatalogAudiovisual() {
  const [selectedCard, setSelectedCard] = useState("/service-1.jpg");

  const imagesCards = [
    "/service-1.jpg",
    "/service-2.jpg",
    "/service-3.jpg",
    "/service-4.jpg",
    "/service-5.jpg",
    "/service-6.jpg",
  ];

  const sectionRef = useRef(null);
  const triggerRef = useRef(null); // para guardar la instancia de ScrollTrigger

  useEffect(() => {
    const el = sectionRef.current;

    gsap.set(el, { opacity: 0, y: 50 });

    triggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top 65%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(el, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power3.in",
        });
      },
      onEnterBack: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(el, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power3.in",
        });
      },
    });

    return () => {
      triggerRef.current?.kill(); // ✅ limpia solo ese trigger
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.containerCatalog}>
      <section className={styles.containerLeft}>
        <section className={styles.infoCatalog}>
          <h3>Estudios de podcast</h3>
          <h4>Todo lo que necesitas para transmitir tu podcast</h4>
          <section className={styles.caracteristicaService}>
            <div className={styles.itemPropiedades}>
              <Image
                src="/dimension.svg"
                width={40}
                height={40}
                alt="icono-caracteristica"
              />
              <div className={styles.datosItem}>
                <p>Dimensiones:</p>
                <p>10m2 - 2x2</p>
              </div>
            </div>
            <div className={styles.itemPropiedades}>
              <Image
                src="/camera.svg"
                width={40}
                height={40}
                alt="icono-caracteristica"
              />
              <div className={styles.datosItem}>
                <p>Equipos:</p>
                <p>10m2 - 2x2</p>
              </div>
            </div>
            <div className={styles.itemPropiedades}>
              <Image
                src="/calendar.svg"
                width={40}
                height={40}
                alt="icono-caracteristica"
              />
              <div className={styles.datosItem}>
                <p>Disponibilidad:</p>
                <p>10m2 - 2x2</p>
              </div>
            </div>
          </section>
        </section>
        <section className={styles.optionBox}>
          {imagesCards.map((img, index) => (
            <div
              key={index}
              className={`${styles.boxItem} ${
                selectedCard === img ? styles.active : ""
              }`}
              onClick={() => setSelectedCard(img)}
            >
              <Image src={img} fill={true} alt="image-service" />
            </div>
          ))}
        </section>
      </section>
      <section className={styles.containerRight}>
        <span>
          <Image
            src="/zoom.svg"
            width={25}
            height={25}
            alt="icono-caracteristica"
          />
        </span>
        <Image
          src={selectedCard}
          fill={true}
          alt="image-service"
          className={styles.visualizar}
        />
      </section>
      <section className={styles.optionBoxResponsive}>
        {imagesCards.map((img, index) => (
          <div
            key={index}
            className={`${styles.boxItem} ${
              selectedCard === img ? styles.active : ""
            }`}
            onClick={() => setSelectedCard(img)}
          >
            <Image src={img} fill={true} alt="image-service" />
          </div>
        ))}
      </section>
      <section className={styles.caracteristicaServiceResponsive}>
        <div className={styles.itemPropiedades}>
          <Image
            src="/dimension.svg"
            width={40}
            height={40}
            alt="icono-caracteristica"
          />
          <div className={styles.datosItem}>
            <p>Dimensiones:</p>
            <p>10m2 - 2x2</p>
          </div>
        </div>
        <div className={styles.itemPropiedades}>
          <Image
            src="/camera.svg"
            width={40}
            height={40}
            alt="icono-caracteristica"
          />
          <div className={styles.datosItem}>
            <p>Equipos:</p>
            <p>10m2 - 2x2</p>
          </div>
        </div>
        <div className={styles.itemPropiedades}>
          <Image
            src="/calendar.svg"
            width={40}
            height={40}
            alt="icono-caracteristica"
          />
          <div className={styles.datosItem}>
            <p>Disponibilidad:</p>
            <p>10m2 - 2x2</p>
          </div>
        </div>
      </section>
    </section>
  );
}
