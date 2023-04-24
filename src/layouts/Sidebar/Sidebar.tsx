import Heading from "../../components/Heading/Heading";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import styles from './sidebar.module.scss'
import { colors, randomColor } from "../../globals/colors";

const Sidebar = () => {
  return (
    <aside style={{backgroundColor: colors[randomColor]}} className={styles.sidebar}>
      <ProfilePicture />
      <div className={styles.wrapper}>
        {/* <Heading title='Contact' /> noFold?
        <Heading title='Skills' />
        <Heading title='Languages' />
        <Heading title='Characteristics' /> */}
        <h3>Contact</h3>
        <p><a href="robbertdoon@gmail.com">robbertdoon@gmail.com</a></p>
        <p><a href="tel:+31655513371">+316 5551 3371</a></p>

        <h3>Skills</h3>
        <h3>Languages</h3>

        <h3>Characteristics</h3>
        <ul>
          <li>Leergierig</li>
          <li>Oplossingsgericht</li>
          <li>Creatief</li>
          <li>Doorgronden</li>
        </ul>
      </div>
    </aside>
  )
}
export default Sidebar