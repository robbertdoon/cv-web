import styles from './header.module.scss'
import { colors, randomColor } from '../../globals/colors';

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <header className={styles.header}>
        <h1><span style={{color: colors[randomColor]}}>{title.substring(0, 1)}</span>{title.substring(1, title.length)}</h1>
        <h2>{subtitle}</h2>
    </header>
  )
}
export default Header

