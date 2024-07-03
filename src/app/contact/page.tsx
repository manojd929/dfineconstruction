import { Link, Card, Typography } from '@mui/material'
import Estimate from '@/components/estimate'
import config from '@/config/config.json'
import getSocialIcon from '@/utils/getSocialIcon'
import styles from './page.module.css'

const Contact = () => {
  const { socialMap } = config
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <Typography variant="h5" className={styles.infoHeader}>Bangalore Office</Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(socialMap.email.type, 'icon')} {socialMap.email.displayText}
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(socialMap.phone1.type, 'icon')} {socialMap.phone1.displayText}
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(socialMap.phone2.type, 'icon')} {socialMap.phone2.displayText}
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(socialMap.whatsapp.type, 'icon')} {socialMap.whatsapp.displayText}
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(socialMap.instagram.type, 'icon')} {socialMap.instagram.displayText}
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(socialMap.linkedin.type, 'icon')} {socialMap.linkedin.displayText}
        </Typography>
      </div>
      <div>
        <Estimate />
      </div>
    </div >
  )
}

export default Contact