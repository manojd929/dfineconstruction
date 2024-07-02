import config from '@/config/config.json'
import styles from './footer.module.css'

const Footer = () => {
  const { generic } = config
  const { footerText } = generic
  return (
    <footer className={styles.footer}>
        <span>&copy; {footerText}</span>
    </footer>
  )
}

export default Footer
