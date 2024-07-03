import Image from 'next/image'
import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Card, Grid, CardHeader, CardContent, Typography } from '@mui/material'

const Benefits = () => {
  const { generic, benefits } = config
  const { headers } = generic

  return (
    <div className={styles.benefitsContainer}>
      <Typography variant="h4" align="center" className={styles.benefitsHeader}>
        {headers.benefits}
      </Typography>
      <Typography variant="h6" align="center" className={styles.benefitsDescription}>
        {headers.benefitsDesc}
      </Typography>
      <Grid container spacing={2}>
        {benefits.map((bf, index) => (
          <Grid key={bf.name + index} item xs={12} md={3} lg={3} >
            <Card className={styles.benefitsCard} elevation={1}>
              <Image
                className={styles.benefitsIcon}
                src={bf.icon}
                height={48}
                width={48}
                alt={bf.name + ' icon'}
              />
              <CardHeader title={bf.name} className={styles.benefitsCardHeader} />
              <CardContent className={styles.benefitsCardContent}>
                {bf.description}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Benefits