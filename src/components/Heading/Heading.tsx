import styles from './heading.module.scss'

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({title}) => {
  return (
    <h2 className={styles.heading}><span>{title}</span></h2>
  )
}
export default Heading