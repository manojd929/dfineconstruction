import styles from './backgroundComp.module.css'

const BackgroundComp = (props: any) => {
  return (
    <div className={styles.backgroundCompContainer}>
      {props.children}
    </div>
  )
}

export default BackgroundComp
