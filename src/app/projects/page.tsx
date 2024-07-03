import styles from './page.module.css'
import ProjectsList from '@/components/projects'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <ProjectsList />
    </div>
  )
}

export default Projects