import Section from '../../components/Section/Section'
import styles from './main.module.scss'

const Main = () => {
  return (
      <main className={styles.main}>
        <Section sectionTitle='Profiel' />
        <Section sectionTitle='Cursussen' />
        <Section sectionTitle='Opleidingen' />
      </main>
  )
}
export default Main