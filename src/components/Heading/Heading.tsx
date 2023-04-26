import styles from './heading.module.scss'

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({title}) => {
  return (
    <h3 className={styles.heading}><span>{title}</span></h3>
  )
}
export default Heading