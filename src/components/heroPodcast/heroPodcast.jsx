import styles from "./heroPodcast.module.css";
import Image from "next/image";
import Menu from "@/components/menu/menu";

export default function HeroPodcast({ id }) {
  return (
    <section id={id} className={styles.heroContainer}>
      <section className={styles.titleBox}>
        <h1>estudios de podcast</h1>
        <h2>Todo lo que necesitas para transmitir tu podcast</h2>
        <button className={styles.btnDirectHome}>
          <p>reservar ahora</p>
          <span>
            <Image src="/arrow.svg" alt="icon-arrow" width={10} height={15} />
          </span>
        </button>
      </section>
      <section className={styles.contextService}>
        <div className={styles.contImg}>
          <Image
            src="/art-podcast.png"
            fill={true}
            alt="bg-personaje-service"
          />
        </div>
        <div className={styles.contLight}>
          <Image src="/bg-responsive-1.svg" className={styles.responsiveBg} fill={true} alt="bg-personaje-service" />
          <Image src="/lights-2.svg" className={styles.normalBg} fill={true} alt="bg-personaje-service" />
        </div>
      </section>
      <section className={styles.btnContactFixed}>
        <button>
          <p>llamada</p>
          <Image src="/call.svg" width={20} height={18} alt="image-service" />
        </button>
        <button>
          <p>mensaje</p>
          <Image src="/mail.svg" width={20} height={18} alt="image-service" />
        </button>
      </section>
      <Menu />
      <Image
        src="/texture-bg-2.svg"
        fill={true}
        alt="textura-fondo"
        className={styles.bgTexture}
      />
    </section>
  );
}
