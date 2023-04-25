import PageTitle from '../../components/PageTitle/PageTitle'
import Section from '../../components/Section/Section'
import styles from './main.module.scss'

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <PageTitle title='Robbert Doon' subtitle='Front-end developer' />
      <main className={styles.main}>
        <Section sectionTitle='Profiel' />
        <Section sectionTitle='Cursussen' />
        <Section sectionTitle='Opleidingen' />
      </main>
    </div>
  )
}
export default Main