import { Link } from '@mui/material';
import CONFIG from '@/config/config.json'
import SocialIcon from '@/components/SocialIcon';
import styles from './banner.module.css'

const Banner = () => {
  const { social } = CONFIG

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
              {SocialIcon(link.type)}<div className={styles.bannerSocialLinkText}>{link.displayText}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Banner