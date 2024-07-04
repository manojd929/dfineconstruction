import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const Services = () => {
  const { generic, services } = config
  const { headers } = generic

  return (
    <div className={styles.servicesContainer}>
      <Typography variant="h4" align="center" className={styles.servicesHeader}>
        {headers.services}
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
  )
}

export default Services