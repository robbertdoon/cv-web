import styles from './pagetitle.module.scss'
import { colors, randomColor } from '../../globals/colors';

interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title, subtitle}) => {
  return (
    <header className={styles.pagetitle}>
        <h1><span style={{color: colors[randomColor]}}>{title.substring(0, 1)}</span>{title.substring(1, title.length)}</h1>
        <h2>{subtitle}</h2>
    </header>
  )
}
export default PageTitle

