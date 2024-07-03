import { Link, Card } from '@mui/material'
import config from '@/config/config.json'
import getSocialIcon from '@/utils/getSocialIcon'
import styles from './page.module.css'

const Contact = () => {
  const { social } = config
  return (
    <div className={styles.contactContainer}>
      {social.map((link: any, index: number) => (
        <Card className={styles.contactCard} key={link.type + index} elevation={1}>
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
      ))}
    </div>
  )
}

export default Contact