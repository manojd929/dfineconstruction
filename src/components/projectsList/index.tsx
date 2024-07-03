import Image from 'next/image'
import Link from 'next/link'
import { Grid, Card, CardHeader, CardContent, Typography } from '@mui/material'
import styles from '@/app/page.module.css'
import config from '@/config/config.json'

const ProjectsList = () => {
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
          const { id, owner, address, description, images, plotSize } = project
          return (
            <Grid key={id} item xs={12} md={6} lg={4}>
              <Link
                href={`/projects/${id}`}
              >
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
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ProjectsList
