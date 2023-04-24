import PageTitle from '../../components/PageTitle/PageTitle'
import Section from '../../components/Section/Section'
import styles from './main.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <PageTitle title='Robbert Doon' subtitle='Front-end developer' />
      <Section sectionTitle='Profiel' />
      <Section sectionTitle='Cursussen' />
      <Section sectionTitle='Opleidingen' />
    </main>
  )
}
export default Main