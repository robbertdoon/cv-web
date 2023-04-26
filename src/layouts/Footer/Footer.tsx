import styles from './footer.module.scss';

const Footer = () => {

  const firstYear = 2023;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.general}>Deze pagina is gebouwd met React en TypeScript.<br/>
      De source code kun je <a href="https://github.com/robbertdoon/cv-web" target='_blank'>hier</a> te vinden.</p>
      <p className={styles.copyright}>
        &copy; {currentYear === firstYear ? firstYear : firstYear + ' - ' + currentYear}
      </p>
    </footer>
  )
}
export default Footer