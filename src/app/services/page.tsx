import ServicesList from '@/components/services'
import styles from './page.module.css'

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <ServicesList />
    </div>
  )
}

export default Services