import Image from 'next/image';
import config from '@/config/config.json';
import { Button, Card, CardContent, CardHeader, Grid, Typography, Link } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const { company, services, social } = config
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
                >Talk to our architects
                </Link>
              </Button>
              <Button className={styles.primaryButton} variant='contained' size="large" color="primary">
                Our Packages
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.estimateContainer}>
          <div className={styles.costQuestion}>
            Looking to Construct a Home ? Find out what it costs ?
          </div>
          <Button className={styles.estimateButton} variant='contained' size="large" color="primary">
            <Link
              color='inherit'
              underline='none'
              href={social[0].value}
              target='__blank'
            >
              Get Free Estimate Now
            </Link>
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
                <Card variant="outlined" className={styles.serviceCard} raised>
                  <Image className={styles.serviceIcon} src={svc.icon} height={48} width={48} alt={svc.name + ' icon'} />
                  <CardHeader title={svc.name} className={styles.serviceCardHeader} />
                  <CardContent className={styles.serviceCardContent}>
                    {svc.short_desc}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <section>
        <div className={styles.recentProjectsContainer}>
          <Typography variant="h4" align="center" className={styles.recentProjectsHeader}>
              Our Recent Projects
          </Typography>
        </div>
      </section>
      <section>
        <div className={styles.packagesContainer}>
          <Typography variant="h4" align="center" className={styles.packagesHeader}>
              Our Construction Packages
          </Typography>
        </div>
      </section>
      <section>
        <div className={styles.partnersContainer}>
          <Typography variant="h4" align="center" className={styles.partnersHeader}>
              Our Trusted Partners
          </Typography>
        </div>
      </section>
      <section>
        <div className={styles.benefitsContainer}>
          <Typography variant="h4" align="center" className={styles.benefitsHeader}>
              What you get ?
          </Typography>
        </div>
        </section>
    </div >
  );
}
