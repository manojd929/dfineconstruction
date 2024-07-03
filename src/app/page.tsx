import Image from 'next/image';
import config from '@/config/config.json';
import { Button, Card, CardContent, CardHeader, Grid, Typography, Link } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  const { company, services, social, benefits, projects } = config
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
                <Card className={styles.serviceCard} elevation={1}>
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
          <Typography variant="h6" align="center" className={styles.recentProjectsDescription}>
            Briefly look into our following projects which are completed and few ongoing
          </Typography>
          <Grid container spacing={6}>
            {projects.map((project, index) => {
              const { owner, address, description, images, plotSize } = project
              return (
                <Grid key={owner + index} item xs={12} md={6} lg={4} >
                  <Card className={styles.projectsCard} elevation={1}>
                    <Image
                      src={images[index]}
                      alt={owner + ' icon'}
                      className={styles.projectsCardImage}
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '20rem' }}
                    />
                    <CardHeader title={owner} />
                    <CardContent className={styles.projectsCardContent}>
                      <Typography>Address: {address}</Typography>
                      <Typography>{description} on {plotSize} plot</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
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
          <Typography variant="h6" align="center" className={styles.benefitsDescription}>
            You can count on us on the following things and more.
          </Typography>
          <Grid container spacing={2}>
            {benefits.map((bf, index) => (
              <Grid key={bf.name + index} item xs={12} md={3} lg={3} >
                <Card className={styles.benefitsCard} elevation={1}>
                  <Image className={styles.benefitsIcon} src={bf.icon} height={48} width={48} alt={bf.name + ' icon'} />
                  <CardHeader title={bf.name} className={styles.benefitsCardHeader} />
                  <CardContent className={styles.benefitsCardContent}>
                    {bf.description}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </div >
  );
}
