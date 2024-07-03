import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Button, Link } from '@mui/material'

const HomeHeroImage = () => {
  const { generic, social, company } = config
  const { buttons } = generic
  return (
    <div className={styles.homeHeroImageContainer}>
      <div className={styles.homeInfo}>
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
  )
}

export default HomeHeroImage