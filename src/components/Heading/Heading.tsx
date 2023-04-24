import styles from './heading.module.scss'

interface HeadingProps {
    title: string;
    noFold?: boolean;
}

const Heading: React.FC<HeadingProps> = ({title, noFold}) => {
  return (
    <h3 className={styles.heading}>{noFold ? title : <span>{title}</span>}</h3>
  )
}
export default Heading