import styles from "./presentation.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Presentation() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null); // para guardar la instancia de ScrollTrigger

  useEffect(() => {
    const el = sectionRef.current;

    gsap.set(el, { opacity: 0, x: 50 });

    triggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration:  1.0,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(el, {
          opacity: 0,
          x: -70,
          duration:  1.0,
          ease: "power3.in",
        });
      },
      onEnterBack: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(el, {
          opacity: 0,
          x: 70,
          duration:  1.0,
          ease: "power3.in",
        });
      },
    });

    return () => {
      triggerRef.current?.kill(); // ✅ limpia solo ese trigger
    };
  }, []);



  return (
    <section className={styles.containerPresentation}>
      <section ref={sectionRef} className={styles.infoSection}>
        <section className={styles.infoBox}>
          <h2>el ambiente ideal para crear</h2>
          <p>
            Somos una escuela dedicada a ofrecer programas deformación y
            entrenamientos especializados, diseñados para ser herramientas clave
            en el desarrollo físico, social y emocional de la comunidad. A
            través de una enseñanza integral, buscamos fomentar habilidades que
            contribuyan al bienestar general de nuestros estudiantes,
            promoviendo la actividad física como un medio para mejorar la salud
            y fortalecer los lazos sociales.
          </p>
        </section>
        <button className={styles.btnPresentation}>
          <p>Consultar reservas</p>
          <span>
            <Image src="/arrow.svg" alt="person" width={15} height={10} />
          </span>
        </button>
      </section>
      <section className={styles.imageBox}>
        <span></span>
        <span></span>
        <Image src="/bg-opacity.jpg" alt="person" fill={true} />
      </section>
    </section>
  );
}
