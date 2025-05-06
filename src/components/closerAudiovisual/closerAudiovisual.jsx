import styles from "./closerAudiovisual.module.css";
import Image from "next/image";

export default function CloserAudiovisual() {
  return (
    <section className={styles.containerGeneral}>
      <section className={styles.imgBox}>
        <Image fill={true} alt="image-service" src="/art-audiovisual.png" />
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
        src="/texture-bg.svg"
      />
    </section>
  );
}
