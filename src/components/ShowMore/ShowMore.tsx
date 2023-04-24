import styles from './showmore.module.scss'
import { colors, randomColor } from '../../globals/colors';

interface ShowMoreProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowMore: React.FC<ShowMoreProps> = ({children, isOpen, setIsOpen}) => {
  const openClose = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.showmore}>
      <button type='button' onClick={openClose} style={{border: '2px solid ' + colors[randomColor]}}>{isOpen ? '-' : '+'}</button>
      {children}
      <div className={styles.gradient} />
    </div>
  )
}
export default ShowMore