import React, { useState, useEffect, useRef } from "react";
import styles from "./catalogWorkshops.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CatalogWorkshops() {
  // Lista de cursos
  const courses = [
    {
      id: 1,
      title: "Pedicure",
      description: "Aprende pedicure",
      image: "/service-1.jpg",
      icon: "/zoom.svg",
      formato: "Online y presencial",
      iconFormato: "/person.svg",
      horario: "2:00pm - 8:00pm",
      iconHorario: "/clock.svg",
      fecha: "22-04-2025",
      iconFecha: "/calendar-two.svg",
    },
    {
      id: 2,
      title: "Manicure",
      description: "Domina el arte del manicure",
      image: "/service-2.jpg",
      icon: "/zoom.svg",
      formato: "Online y presencial",
      iconFormato: "/person.svg",
      horario: "2:00pm - 8:00pm",
      iconHorario: "/clock.svg",
      fecha: "22-04-2025",
      iconFecha: "/calendar-two.svg",
    },
    {
      id: 3,
      title: "Diseno de unas",
      description: "Crea diseños únicos y profesionales",
      image: "/service-3.jpg",
      icon: "/zoom.svg",
      formato: "Online y presencial",
      iconFormato: "/person.svg",
      horario: "2:00pm - 8:00pm",
      iconHorario: "/clock.svg",
      fecha: "22-04-2025",
      iconFecha: "/calendar-two.svg",
    },
    {
      id: 4,
      title: "Barberia pro",
      description: "Crea diseños únicos y profesionales",
      image: "/service-4.jpg",
      icon: "/zoom.svg",
      formato: "Online y presencial",
      iconFormato: "/person.svg",
      horario: "2:00pm - 8:00pm",
      iconHorario: "/clock.svg",
      fecha: "22-04-2025",
      iconFecha: "/calendar-two.svg",
    },
    {
      id: 5,
      title: "Estilismo",
      description: "Crea diseños únicos y profesionales",
      image: "/service-5.jpg",
      icon: "/zoom.svg",
      formato: "Online y presencial",
      iconFormato: "/person.svg",
      horario: "2:00pm - 8:00pm",
      iconHorario: "/clock.svg",
      fecha: "22-04-2025",
      iconFecha: "/calendar-two.svg",
    },
    // Puedes agregar más cursos aquí
  ];

  // Estado para controlar qué tarjetas muestran los detalles
  const [visibleCards, setVisibleCards] = useState({});

  const toggleCard = (id) => {
    setVisibleCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sectionRef = useRef(null);
  const triggerRef = useRef(null); // para guardar la instancia de ScrollTrigger

  useEffect(() => {
    const el = sectionRef.current;

    gsap.set(el, { opacity: 0, y: 50 });

    triggerRef.current = ScrollTrigger.create({
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

    return () => {
      triggerRef.current?.kill(); // ✅ limpia solo ese trigger
    };
  }, []);

  return (
    <section className={styles.containerWorkshops}>
      <section className={styles.titleContainer}>
        <h2>aumenta tus conocimientos con grandes profesionales</h2>
        <p>Repotencia tus conocimientos en workshops personalizados</p>
      </section>

      <section ref={sectionRef} className={styles.boxOverflow}>
        {courses.map((course) => (
          <section
            key={course.id}
            className={`${styles.itemCard} ${
              visibleCards[course.id] ? styles.activeCard : ""
            }`}
          >
            <section className={styles.imageSection}>
              <span>
                <Image
                  src={course.icon}
                  width={25}
                  height={25}
                  alt="icono-caracteristica"
                />
              </span>
              <Image
                src={course.image}
                className={styles.imgCard}
                fill={true}
                alt={`imagen-${course.title}`}
              />
            </section>

            <section className={styles.infoSection}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>

              {visibleCards[course.id] && (
                <section className={styles.showContainer}>
                  <section className={styles.itemCaracter}>
                    <Image
                      src={course.iconFormato}
                      width={25}
                      height={25}
                      alt="icono-caracteristica"
                    />
                    <div className={styles.flexInfo}>
                      <h5>Formato</h5>
                      <p>{course.formato}</p>
                    </div>
                  </section>
                  <section className={styles.itemCaracter}>
                    <Image
                      src={course.iconHorario}
                      width={25}
                      height={25}
                      alt="icono-caracteristica"
                    />
                    <div className={styles.flexInfo}>
                      <h5>Horario</h5>
                      <p>{course.horario}</p>
                    </div>
                  </section>
                  <section className={styles.itemCaracter}>
                    <Image
                      src={course.iconFecha}
                      width={25}
                      height={25}
                      alt="icono-caracteristica"
                    />
                    <div className={styles.flexInfo}>
                      <h5>Fecha</h5>
                      <p>22-05-25</p>
                    </div>
                  </section>
                </section>
              )}

              <section className={styles.flexButtons}>
                <button onClick={() => toggleCard(course.id)}>
                  {visibleCards[course.id] ? "ocultar" : "más detalles"}
                </button>
                <button>reservar</button>
              </section>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
