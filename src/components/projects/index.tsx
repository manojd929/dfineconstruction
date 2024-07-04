import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const Projects = () => {
  const { generic, projects } = config
  const { headers } = generic
  // @ts-expect-error
  const projectsList = Object.keys(projects).map((p: any, _index) => projects[p])
  return (
    <div className={styles.projectsContainer}>
      <Typography variant="h4" align="center" className={styles.projectsHeader}>
        {headers.projects}
      </Typography>
      <Typography variant="h6" align="center" className={styles.projectsDescription}>
        {headers.projectsDesc}
      </Typography>
      <Grid container spacing={6}>
        {projectsList.map((project, index) => {
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
  )
}

export default Projects
