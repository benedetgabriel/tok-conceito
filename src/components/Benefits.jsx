import styles from "../styles/Benefits.module.css";
import Vector from "../assets/Vector.svg";
import Truck from "../assets/truck.svg";
import Award from "../assets/award.svg";
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import BenefitsMobile from "./mobile/BenefitsMobile";

const Benefits = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <BenefitsMobile />;
  }

  return(
    <section className={styles.benefits}>
      <div className={styles.container_benefits}>
        <div className={styles.content}>
          <img src={Award} alt="" />
          <div>
            <p className={styles.title}>Alta qualidade</p>
            <p className={styles.text}>O material é resistente</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={Vector} alt="" />
          <div>
            <p className={styles.title}>Garantia extendida</p>
            <p className={styles.text}>de até dois anos</p>
          </div>
        </div>

        <div className={styles.content}>
          <img src={Truck} alt="" />
          <div>
            <p className={styles.title}>Frete grátis</p>
            <p className={styles.text}>Pedidos acima de R$3000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits;