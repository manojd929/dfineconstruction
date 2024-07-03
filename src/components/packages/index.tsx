import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Typography } from '@mui/material'

const Packages = () => {
  const { generic } = config
  const { headers } = generic
  return (
    <div className={styles.packagesContainer}>
      <Typography variant="h4" align="center" className={styles.packagesHeader}>
        {headers.packages}
      </Typography>
    </div>
  )
}

export default Packages