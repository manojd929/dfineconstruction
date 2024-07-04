import ProjectsList from '@/components/projectsList'
import styles from './page.module.css'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <ProjectsList />
    </div>
  )
}

export default Projects