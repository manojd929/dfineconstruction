import styles from './page.module.css'
import ServicesList from '@/components/services'

const Services = () => {
  return (
    <div className={styles.projectsContainer}>
      <ServicesList />
    </div>
  )
}

export default Services