import styles from "./closerFotografia.module.css";
import Image from "next/image";

export default function CloserFotografia() {
  return (
    <section className={styles.containerGeneral}>
      <section className={styles.imgBox}>
        <Image fill={true} alt="image-service" src="/art-fotografia.png" />
      </section>
      <section className={styles.infoBox}>
        <h2>
          consultar horarios
          <br />
          disponibles
        </h2>
        <h3>contacta con atención al cliente</h3>
        <section className={styles.flexButtons}>
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
            <Image width={20} height={20} alt="image-service" src="/wss-black.svg" />
          </button>
        </section>
      </section>
      <Image
        className={styles.bgTexture}
        fill={true}
        alt="image-service"
        src="/texture-bg-2.svg"
      />
    </section>
  );
}
