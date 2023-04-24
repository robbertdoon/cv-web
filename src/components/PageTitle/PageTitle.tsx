import styles from './pagetitle.module.scss'

interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title, subtitle}) => {
  return (
    <header className={styles.pagetitle}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </header>
  )
}
export default PageTitle