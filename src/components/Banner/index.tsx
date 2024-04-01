import { Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import styles from './banner.module.css'
import CONFIG from '@/config/config.json'

const Banner = () => {
  const { social } = CONFIG

  const getIcon = (type: string) => {
    switch (type) {
      case 'whatsapp':
        return <WhatsAppIcon />
      case 'instagram':
        return <InstagramIcon />
      case 'phone':
        return <PhoneIcon />
      case 'email':
        return <EmailIcon />
      default:
        return <></>
    }
  }

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerSocialLinks}>
        {social.map((link) => (
          <div key={link.type} className={styles.bannerSocialLink}>
            <Link
              color='inherit'
              underline='none'
              href={link.value}
              target='__blank'
            >
              {getIcon(link.type)}<div className={styles.bannerSocialLinkText}>{link.displayText}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Banner