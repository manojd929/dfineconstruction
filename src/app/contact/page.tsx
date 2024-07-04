import { Link, Card, Typography } from '@mui/material'
import Estimate from '@/components/estimate'
import config from '@/config/config.json'
import getSocialIcon from '@/components/atoms/SocialIcon'
import styles from './page.module.css'

const Contact = () => {
  const { socialMap } = config
  const { email, whatsapp, phone1, phone2, instagram, linkedin, business } = socialMap
  const style = {
    position: 'relative',
    top: '0.4rem',
    marginRight: '1rem'
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <Typography variant="h5" className={styles.infoHeader}>Bangalore Office</Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(email.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={email.value}
            target='__blank'
          >
            {email.displayText}
          </Link>
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(phone1.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={phone1.value}
            target='__blank'
          >
            {phone1.displayText}
          </Link>
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(phone2.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={phone2.value}
            target='__blank'
          >
            {phone2.displayText}
          </Link>
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(whatsapp.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={whatsapp.value}
            target='__blank'
          >
            {whatsapp.displayText}
          </Link>
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(instagram.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={instagram.value}
            target='__blank'
          >
            {instagram.displayText}
          </Link>
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(linkedin.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={linkedin.value}
            target='__blank'
          >
            {linkedin.displayText}
          </Link>
        </Typography>
        <Typography className={styles.infoText}>
          {getSocialIcon(business.type, style)}
          <Link
            color='inherit'
            underline='none'
            href={business.value}
            target='__blank'
          >
            {business.displayText}
          </Link>
        </Typography>
      </div>
      <div>
        <Estimate />
      </div>
    </div >
  )
}

export default Contact