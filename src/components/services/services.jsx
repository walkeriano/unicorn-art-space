import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".anim-section");

    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 50 });

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
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

      // Limpieza individual por elemento
      return () => {
        trigger.kill();
      };
    });
  }, []);

  return (
    <section className={styles.containerServices}>
      <section className={styles.flexServices}>
        <Link href="/podcast"  className={`${styles.cardBox} anim-section`}>
          <section className={styles.infoCard}>
            <h3>Podcast</h3>
            <p>Ambientación e iluminación profesional</p>
            <button>
              ver mas
              <Image
                src="/open.svg"
                width={20}
                height={18}
                alt="image-service"
              />
            </button>
          </section>
          <section className={styles.imageBoxCard}>
            <span></span>
            <Image src="/service-2.jpg" fill={true} alt="image-service" />
          </section>
        </Link>
        <Link href="/workshops" className={`${styles.cardBox} anim-section`}>
          <section className={styles.infoCard}>
            <h3>Workshops</h3>
            <p>Formaciones y capacitaciones profesionales</p>
            <button>
              ver mas
              <Image
                src="/open.svg"
                width={20}
                height={18}
                alt="image-service"
              />
            </button>
          </section>
          <section className={styles.imageBoxCard}>
            <span></span>
            <Image src="/service-8.jpeg" fill={true} alt="image-service" />
          </section>
        </Link>
      </section>
      <section className={styles.flexServices}>
        <Link href="/fotografia" className={`${styles.cardBox} anim-section`}>
          <section className={styles.infoCard}>
            <h3>Fotografía</h3>
            <p>Estudios y equipos profesionales</p>
            <button>
              ver mas
              <Image
                src="/open.svg"
                width={20}
                height={18}
                alt="image-service"
              />
            </button>
          </section>
          <section className={styles.imageBoxCard}>
            <span></span>
            <Image src="/service-1.jpg" fill={true} alt="image-service" />
          </section>
        </Link>
        <Link href="/audiovisual" className={`${styles.cardBox} anim-section`}>
          <section className={styles.infoCard}>
            <h3>Audiovisual</h3>
            <p>Estudios y escenografías adaptables</p>
            <button>
              ver mas
              <Image
                src="/open.svg"
                width={20}
                height={18}
                alt="image-service"
              />
            </button>
          </section>
          <section className={styles.imageBoxCard}>
            <span></span>
            <Image src="/service-5.jpg" fill={true} alt="image-service" />
          </section>
        </Link>
      </section>
      <section  className={styles.flexServices}>
        <Link href="/streaming" className={`${styles.cardBox} anim-section`}>
          <section className={styles.infoCard}>
            <h3>Streaming</h3>
            <p>Equipos y redes de alta calidad</p>
            <button>
              ver mas
              <Image
                src="/open.svg"
                width={20}
                height={18}
                alt="image-service"
              />
            </button>
          </section>
          <section className={styles.imageBoxCard}>
            <span></span>
            <Image src="/service-3.jpg" fill={true} alt="image-service" />
          </section>
        </Link>
        <Link href="/marketing" className={`${styles.cardBox} anim-section`}>
          <section className={styles.infoCard}>
            <h3>Marketing digital</h3>
            <p>Aumenta la visibilidad de tu marca en el mundo digital</p>
            <button>
              ver mas
              <Image
                src="/open.svg"
                width={20}
                height={18}
                alt="image-service"
              />
            </button>
          </section>
          <section className={styles.imageBoxCard}>
            <span></span>
            <Image src="/service-7.jpg" fill={true} alt="image-service" />
          </section>
        </Link>
      </section>
    </section>
  );
}
