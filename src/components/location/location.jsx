import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./location.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
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
    <section className={`${styles.locationSection} anim-section`}>
      <section className={styles.titleSection}>
        <h2>excelente ubicacion</h2>
        <h3>Canales de atencion al cliente</h3>
      </section>
      <section className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.805097786735!2d-77.0319887246377!3d-12.125484043372037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81ec5d54d07%3A0xe9df3ef854963a95!2sAv.%20Jos%C3%A9%20Larco%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2ses!4v1746188563144!5m2!1ses!2ses"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className={styles.infoSection}>
        <section className={styles.listContact}>
          <div>
            <Image width={20} height={20} alt="image-service" src="/call.svg" />
            <p>993 744 958</p>
          </div>
          <div>
            <Image width={20} height={20} alt="image-service" src="/mail.svg" />
            <p>contacto@gmail.com</p>
          </div>
          <div>
            <Image
              width={20}
              height={20}
              alt="image-service"
              src="/location.svg"
            />
            <p>Av.larco 286, Miraflores. Lima, Perú.</p>
          </div>
        </section>
        <section className={styles.listButtons}>
          <button>
            <p>llamar</p>
            <Image width={20} height={20} alt="image-service" src="/call.svg" />
          </button>
          <button>
            <p>email</p>
            <Image width={20} height={20} alt="image-service" src="/mail.svg" />
          </button>
          <button>
            <p>mensaje</p>
            <Image
              width={20}
              height={20}
              alt="image-service"
              src="/wss-black.svg"
            />
          </button>
        </section>
      </section>
      <Image
        className={styles.bgTexture}
        src="/texture-bg-2.svg"
        fill={true}
        alt="image-bg"
      />
    </section>
  );
}
