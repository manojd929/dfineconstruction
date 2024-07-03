import config from '@/config/config.json';
import HomeHeroImage from '@/components/homeHeroImage'
import Estimate from '@/components/estimate';
import Services from '@/components/services';
import Projects from '@/components/projects';
import Packages from '@/components/packages';
import Benefits from '@/components/benefits';
import Partners from '@/components/partners'
import { Button, Link } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const { company, social, generic } = config
  const { buttons } = generic
  return (
    <div className={styles.main}>
      <section>
        <HomeHeroImage />
      </section>
      <section>
        <Estimate />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Packages />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Partners />
      </section>
    </div >
  );
}
