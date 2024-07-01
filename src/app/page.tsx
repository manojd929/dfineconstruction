import BackgroundComp from "@/components/BackgroundComp";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import config from '@/config/config.json'

export default function Home() {
  const { company } = config
  return (
    <div className={styles.main}>
      <BackgroundComp>
        <div className={styles.homeBgContent}>
          <p className={styles.motto}>{company.motto}</p>
          <p className={styles.description}>{company.description}</p>
          <div className={styles.buttonsContainer}>
            <Button className={styles.primaryButton} variant='contained' size="large" color="primary">
              Talk to our architects now
            </Button>
            <Button className={styles.primaryButton} variant='contained' size="large" color="primary">
              Our Packages
            </Button>
          </div>
        </div>
      </BackgroundComp>
    </div >
  );
}
