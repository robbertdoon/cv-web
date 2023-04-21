import styles from './showmore.module.scss'

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
      <button type='button' onClick={openClose}>{isOpen ? '-' : '+'}</button>
      {children}
      <div className={styles.gradient} />
    </div>
  )
}
export default ShowMore