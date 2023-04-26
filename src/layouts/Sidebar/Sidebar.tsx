import Skills from "../../components/Skills/Skills";
import styles from './sidebar.module.scss'
import { colors, randomColor } from "../../globals/colors";

const Sidebar = () => {
  return (      
    <aside style={{backgroundColor: colors[randomColor]}} className={styles.sidebar}>
      <div className={styles.wrapper}>
        <h3>Contact</h3>
        <p><a href="mailto:myemail@domain.com">E-mail</a></p>
        <p><a href="tel:mynumber">Phone</a></p>
        <p><a href="https://github.com/robbertdoon" target="_blank">GitHub</a></p>

        <Skills title="Skills" skills={[{name: "React", rating: 4}, {name: "TypeScript", rating: 3}, {name: "HTML/SCSS/JavaScript", rating: 4}, {name: "overige", rating: 3}]} />
        <Skills title="Languages" skills={[{name: "Nederlands", rating: 5}, {name: "Engels", rating: 4}]} />

        <h3>Characteristics</h3>
        <ul>
          <li>Leergierig</li>
          <li>Oplossingsgericht</li>
          <li>Creatief</li>
          <li>Doorgrondend</li>
        </ul>
      </div>
    </aside>
  )
}
export default Sidebar