import Benefits from '@/components/benefits';
import Estimate from '@/components/estimate';
import HomeHeroImage from '@/components/homeHeroImage';
import Packages from '@/components/packages';
import Partners from '@/components/partners';
import ProjectsList from '@/components/projectsList';
import Services from '@/components/services';
import styles from "./page.module.css";

export default function Home() {
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
        <ProjectsList />
      </section>
      <section id="packages">
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
