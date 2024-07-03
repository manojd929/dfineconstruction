import { Link } from '@mui/material';
import CONFIG from '@/config/config.json'
import SocialIcon from '@/components/atoms/SocialIcon';
import styles from './banner.module.css'

const Banner = () => {
  const { social } = CONFIG

  return (
    <div className={styles.bannerSection}> 
      <div className={styles.bannerSocialLinks} >
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
    </div>
  )
}

export default Banner