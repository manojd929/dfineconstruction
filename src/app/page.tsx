import config from '@/config/config.json';
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
        <div className={styles.backgroundCompContainer}>
          <div className={styles.homeBgContainer}>
            <p className={styles.motto}>{company.motto}</p>
            <p className={styles.description}>{company.description}</p>
            <div className={styles.buttonsContainer}>
              <Button className={styles.primaryButton} variant='contained' size="large" color="primary">
                <Link
                  color='inherit'
                  underline='none'
                  href={social[0].value}
                  target='__blank'
                >{buttons.talkToArchitects}
                </Link>
              </Button>
              <Button className={styles.primaryButton} variant='contained' size="large" color="primary">
                {buttons.ourPackages}
              </Button>
            </div>
          </div>
        </div>
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
