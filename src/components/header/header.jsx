import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <section className={styles.containerHeader}>
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
      <Image
        src="/logo-unicorn.svg"
        width={130}
        height={150}
        alt="image-logo-unicorn"
        className={styles.logo}
      />
      {showMenu ? (
        <button onClick={() => setShowMenu(false)} className={styles.btnMenu}>
          <Image
            src="/icon-menu.svg"
            width={25}
            height={25}
            alt="image-logo-unicorn"
          />
        </button>
      ) : (
        <section className={styles.menuHeader}>
          <button className={styles.closing} onClick={() => setShowMenu(true)}>
            x
          </button>
          <section className={styles.containerMenu}>
            <div className={styles.boxImg}>
              <Image
                src="/mascot.svg"
                fill={true}
                alt="image-logo-unicorn"
              />
            </div>
            <section className={styles.listMenu}>
              <Link href="/">home</Link>
              <Link href="/podcast">podcast</Link>
              <Link href="/audiovisual">audiovisual</Link>
              <Link href="/fotografia">fotografia</Link>
              <Link href="/workshops">workshops</Link>
              <Link href="/streaming">streaming</Link>
              <Link href="/marketing">marketing</Link>
              <Link href="/tecnologia">tecnologia</Link>
            </section>
          </section>
        </section>
      )}

      <button className={styles.btnReservar}>
        <p>reservar</p>
        <Image src="/wss-icon.svg" width={25} height={22} alt="icon-contact" />
      </button>
    </section>
  );
}
