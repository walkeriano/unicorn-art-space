import styles from "./catalogTecnology.module.css";
import Image from "next/image";

export default function CatalogTecnology() {
  return (
    <section className={styles.containerMarketing}>
      <section className={styles.titleCatalog}>
        <h2>lleva a tu marca donde estan tus futuros clientes</h2>
        <h3>Aumenta el alcance en redes sociales</h3>
      </section>
      <section className={styles.flexServicesMkt}>
        <span></span>
        <section className={styles.itemService}>
          <section className={styles.itemLeft}>
            <h4>Landing<br />Page</h4>
            <h5>Identidad de marca</h5>
          </section>
          <section className={styles.itemRight}>
            <h3>Todo lo que necesitas para transimitir tu podcast</h3>
            <button className={styles.btnDirectHome}>
              <p>Reservar</p>
              <span>
                <Image
                  src="/arrow.svg"
                  width={12}
                  height={10}
                  alt="icon-servicio"
                />
              </span>
            </button>
          </section>
          <div className={styles.bgIcon}>
            <Image src="/item-1-1.svg" fill={true} alt="icon-servicio" />
          </div>
        </section>
        <span></span>
        <section className={styles.itemService}>
          <section className={styles.itemLeft}>
            <h4>
              paginas
              <br />
              web
            </h4>
            <h5>Diseño, video y fotografía</h5>
          </section>
          <section className={styles.itemRight}>
            <h3>Todo lo que necesitas para transimitir tu podcast</h3>
            <button className={styles.btnDirectHome}>
              <p>Reservar</p>
              <span>
                <Image
                  src="/arrow.svg"
                  width={12}
                  height={10}
                  alt="icon-servicio"
                />
              </span>
            </button>
          </section>
          <div className={styles.bgIcon}>
            <Image src="/item-2-2.svg" fill={true} alt="icon-servicio" />
          </div>
        </section>
        <span></span>
        <section className={styles.itemService}>
          <section className={styles.itemLeft}>
            <h4>
              e-commerce
            </h4>
            <h5>Planning, meta ads y google ads</h5>
          </section>
          <section className={styles.itemRight}>
            <h3>Todo lo que necesitas para transimitir tu podcast</h3>
            <button className={styles.btnDirectHome}>
              <p>Reservar</p>
              <span>
                <Image
                  src="/arrow.svg"
                  width={12}
                  height={10}
                  alt="icon-servicio"
                />
              </span>
            </button>
          </section>
          <div className={styles.bgIcon}>
            <Image src="/item-3-3.svg" fill={true} alt="icon-servicio" />
          </div>
        </section>
        <span></span>
        <section className={styles.itemService}>
          <section className={styles.itemLeft}>
            <h4>
              sistemas
              <br />
              corporativos
            </h4>
            <h5>Transformación digital</h5>
          </section>
          <section className={styles.itemRight}>
            <h3>Todo lo que necesitas para transimitir tu podcast</h3>
            <button className={styles.btnDirectHome}>
              <p>Reservar</p>
              <span>
                <Image
                  src="/arrow.svg"
                  width={12}
                  height={10}
                  alt="icon-servicio"
                />
              </span>
            </button>
          </section>
          <div className={styles.bgIcon}>
            <Image src="/item-4-4.svg" fill={true} alt="icon-servicio" />
          </div>
        </section>
      </section>
    </section>
  );
}
