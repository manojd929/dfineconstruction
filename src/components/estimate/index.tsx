import styles from '@/app/page.module.css'
import config from '@/config/config.json'
import { Button, Link } from '@mui/material'

const Estimate = () => {
  const { generic, social } = config
  const { headers, buttons } = generic
  return (
    <div className={styles.estimateContainer}>
      <div className={styles.costQuestion}>
        {headers.estimate}
      </div>
      <Button className={styles.estimateButton} variant='contained' size="large" color="primary">
        <Link
          color='inherit'
          underline='none'
          href={social[0].value}
          target='__blank'
        >
          {buttons.getFreeEstimate}
        </Link>
      </Button>
    </div>
  )
}

export default Estimate