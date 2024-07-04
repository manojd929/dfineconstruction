'use client'
import config from '@/config/config.json'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import styles from './page.module.css'

const ProjectDetails = () => {
  const { projects, generic } = config
  const { subHeaders } = generic
  const params = useParams()
  const { id } = params
  // @ts-expect-error
  const projectDetails = projects[id]
  const { owner, address, description, plotSize, constructionSize, images } = projectDetails
  return (
    <div className={styles.projectDetailsContainer}>
      <div className={styles.projectInfo}>
        <Typography variant="h6" className={styles.infoText}>
          {owner}
        </Typography>
        <Typography variant="body1" className={styles.infoText}>
          {subHeaders.address}: {address}
        </Typography>
        <Typography variant="body1" className={styles.infoText}>
          {subHeaders.description}: {description}
        </Typography>
        <Typography variant="body1" className={styles.infoText}>
          {subHeaders.plotSize}: {plotSize}
        </Typography>
        <Typography variant="body1" className={styles.infoText}>
          {subHeaders.constructionSize}: {constructionSize}
        </Typography>
      </div>
      <Grid container spacing={6}>
        {images.map((img: any, index: any) => (
          <Grid item xs={12} md={4} lg={4} key={id + index}>
            <Image
              src={img}
              alt={owner + ' house image ' + index}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: '100%', height: '16rem' }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProjectDetails