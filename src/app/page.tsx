import BackgroundComp from "@/components/BackgroundComp";
import config from '@/config/config.json';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const { company, services } = config
  return (
    <div className={styles.main}>
      <section>
        <BackgroundComp>
          <div className={styles.homeBgContainer}>
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
      </section>
      <section>
        <div className={styles.estimateContainer}>
          <div className={styles.costQuestion}>
            Looking to Construct a Home ? Find out what it costs ?
          </div>
          <Button className={styles.estimateButton} variant='contained' size="large" color="primary">
            Get Free Estimate Now
          </Button>
        </div>
      </section>
      <section>
        <div className={styles.servicesContainer}>
          <Typography variant="h4" align="center" className={styles.servicesHeader}>
            All Construction Services Under One Roof
          </Typography>
          <Grid container spacing={6}>
            {services.map((svc, index) => (
              <Grid key={svc.name + index} item xs={12} md={4} lg={4} >
                <Card variant="outlined">
                  <CardHeader title={svc.name} />
                  <CardContent>
                    {svc.description}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <section>
        <div className={styles.recentWorksContainer}>
          
        </div>
      </section>
    </div >
  );
}
