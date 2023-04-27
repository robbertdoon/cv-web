import Skills from "../../components/Skills/Skills";
import styles from './sidebar.module.scss'
import { colors, randomColor } from "../../globals/colors";

const Sidebar = () => {
  return (      
    <aside className={styles.sidebar}>
      <div className={styles.wrapper}>
        <h3 style={{color: colors[randomColor]}}>Contact</h3>
        <p><a href={"mailto:" + import.meta.env.VITE_EMAIL_ADDRESS}>{import.meta.env.VITE_EMAIL_ADDRESS}</a></p>
        <p><a href={"tel:" + import.meta.env.VITE_PHONE_NUMBER}>{import.meta.env.VITE_PHONE_NUMBER}</a></p>
        <p><a href="https://github.com/robbertdoon" target="_blank">GitHub Profile</a></p>

        <Skills title="Skills" skills={
            [
              {name: "React", rating: 4}, 
              {name: "TypeScript", rating: 4}, 
              {name: "JavaScript", rating: 4}, 
              {name: "HTML/CSS", rating: 5}, 
              {name: "Overige", rating: 3}
            ]
          } 
        />
        <Skills title="Languages" skills={
            [
              {name: "Nederlands", rating: 5}, 
              {name: "Engels", rating: 4}
            ]
          } 
        />

        <h3 style={{color: colors[randomColor]}}>Characteristics</h3>
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