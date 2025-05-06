import styles from "./precios.module.css";

export default function Precios(){
    return(
        <section className={styles.preciosContainer}>
            <section className={styles.itemPrecio}>
                <h3>Plan Inicial</h3>
                <h4>local + equipos + personal</h4>
                <p>S/.150</p>
            </section>
            <span></span>
            <section className={styles.itemPrecio}>
                <h3>Plan Secundario</h3>
                <h4>local + equipos + personal</h4>
                <p>S/.150</p>
            </section>
            <span></span>
            <section className={styles.itemPrecio}>
                <h3>Plan Tercero</h3>
                <h4>local + equipos + personal</h4>
                <p>S/.150</p>
            </section>
        </section>
    )
}