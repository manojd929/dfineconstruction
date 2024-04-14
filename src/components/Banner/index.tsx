import { Link } from '@mui/material';
import CONFIG from '@/config/config.json'
import getSocialIcon from '@/utils/getSocialIcon';
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
              {getSocialIcon(link.type)}<div className={styles.bannerSocialLinkText}>{link.displayText}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Banner