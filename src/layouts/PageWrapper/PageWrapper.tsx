import styles from './pagewrapper.module.scss';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
  return <div className={styles.pagewrapper}>{children}</div> 
}
export default PageWrapper