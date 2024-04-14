import { Paper, Link, Card } from '@mui/material'
import CONFIG from '@/config/config.json'
import getSocialIcon from '@/utils/getSocialIcon'
import styles from './page.module.css'

const Contact = () => {
  const socialLinks = CONFIG.social
  return (
    <div className={styles.contactContainer}>
      {socialLinks.map((link: any, index: number) => (
        <Paper elevation={3} key={link.type + index}>
          <Card variant='outlined' className={styles.contactCard}>
            <Link
              color='inherit'
              underline='none'
              href={link.value}
              target='__blank'
            >
              <div>{getSocialIcon(link.type)}</div>
              <div>{link.displayText}</div>
            </Link>
          </Card>
        </Paper>
      ))}

    </div>
  )
}

export default Contact