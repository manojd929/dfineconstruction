import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Typography } from '@mui/material'

const Partners = () => {
  const { generic } = config
  const { headers } = generic
  return (
    <div className={styles.partnersContainer}>
      <Typography variant="h4" align="center" className={styles.partnersHeader}>
        {headers.partners}
      </Typography>
    </div>
  )
}

export default Partners