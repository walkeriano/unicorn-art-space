import styles from "./hero.module.css";
import Image from "next/image";
import Menu from "@/components/menu/menu";
import Link from "next/link";

export default function Hero({ id }) {
  return (
    <section id={id} className={styles.heroContainer}>
      <section className={styles.titleBox}>
        <h1>inspiramos creamos y producimos</h1>
        <h2>Alquiler de Espacios para producción creativa</h2>
        <button className={styles.btnDirectHome}>
          <p>reservar ahora</p>
          <span>
            <Image
              src="/arrow.svg"
              alt="icon-arrow"
              width={10}
              height={15}
            />
          </span>
        </button>
      </section>
      <section className={styles.contextService}>
        <div className={styles.contLight}>
        <Image src="/lights.svg" className={styles.lightPc} fill={true} alt="bg-personaje-service" />
          <Image src="/lights-two.svg" className={styles.lightMov} fill={true} alt="bg-personaje-service" />
        </div>
        <div className={styles.contImg}>
          <Image src="/roman-home-2.png" className={styles.oficialImgTwo} fill={true} alt="bg-personaje-service" />
          <Image src="/roman-home.png" className={styles.oficialImg} fill={true} alt="bg-personaje-service" />
        </div>
        <div className={styles.contImgResp}>
        <Image src="/roman-vertical2.png" className={styles.oficialImgResp} fill={true} alt="bg-personaje-service" />
        <Image src="/roman-vertical.png" className={styles.oficialImgRespOne} fill={true} alt="bg-personaje-service" />
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
        <button>
          <p>mensaje</p>
          <Image src="/wss-black.svg" width={20} height={20} alt="image-service" />
        </button>
      </section>
      <div className={styles.boxContact}>
        <Link href="/">
          <Image src="/tk-icon.svg" width={22} height={22} alt="icon-contact" />
        </Link>
        <Link href="/">
          <Image src="/fb-icon.svg" width={22} height={22} alt="icon-contact" />
        </Link>
        <Link href="/">
          <Image
            src="/ins-icon.svg"
            width={22}
            height={22}
            alt="icon-contact"
          />
        </Link>
      </div>
      <Menu />
      <Image
        src="/texture-bg.svg"
        fill={true}
        alt="textura-fondo"
        className={styles.bgTexture}
      />
    </section>
  );
}
