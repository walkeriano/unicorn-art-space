import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <button onClick={scrollToTop} className={styles.btnUp}>
        <Image src="/arrow.svg" alt="icon-btn" width={30} height={30} />
      </button>
      <span className={styles.animationMove}></span>
      <h2>unicornartspace</h2>
      <section className={styles.containFooter}>
        <section className={styles.leftFooter}>
          <Image
            src="/logo-white.svg"
            alt="icon-btn"
            width={90}
            height={120}
          />
          <p>Todos los derechos reservados 2025.</p>
          <p>Unicorn Art Space S.A.C</p>
        </section>
        <section className={styles.rightFooter}>
          <ul>
            <li>993 744 957</li>
            <li>contacto@gmail.com</li>
            <li>Lima, Perú</li>
          </ul>
          <div className={styles.socialMediaFooter}>
            <Link href="/" className={styles.btnSocial}>
              <Image
                src="/ins-icon.svg"
                alt="icon-btn"
                width={30}
                height={30}
              />
            </Link>
            <Link href="/" className={styles.btnSocial}>
              <Image src="/tk-icon.svg" alt="icon-btn" width={30} height={30} />
            </Link>
            <Link href="/" className={styles.btnSocial}>
              <Image src="/fb-icon.svg" alt="icon-btn" width={30} height={30} />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
