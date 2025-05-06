"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu.module.css";

export default function Menu() {
    const pathname = usePathname();
    const currentPage = pathname.replace("/", "") || "home";

    const menuItems = [
        { label: "home", href: "/" },
        { label: "podcast", href: "/podcast" },
        { label: "audiovisual", href: "/audiovisual" },
        { label: "fotografia", href: "/fotografia" },
        { label: "workshops", href: "/workshops" },
        { label: "streaming", href: "/streaming" },
        { label: "marketing", href: "/marketing" },
        { label: "tecnologia", href: "/tecnologia" },
    ];

    return (
        <section className={styles.menuBox}>
            {menuItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className={`${styles.iteMenu} ${currentPage === item.label ? styles.active : ""}`}
                >
                    <p>{item.label}</p>
                </Link>
            ))}
        </section>
    );
}