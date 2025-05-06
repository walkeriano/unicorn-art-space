import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <section className={styles.contLoading}>
      <div className={styles.logoWrapper}>
  <Image
    src="/logo-unicorn.svg"
    alt="image-loading"
    width={180}
    height={180}
  />
</div>
      <div className={styles.loader}></div>
      <div className={styles.contExpand}>
        <Image
          src="/expand.svg"
          className={styles.expand}
          width={1000} // o el tamaño que desees para que sobresalga
          height={1000}
          alt="expand-lights"
        />
      </div>
    </section>
  );
}
