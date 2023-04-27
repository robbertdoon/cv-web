import styles from './skills.module.scss';
import { colors, randomColor } from "../../globals/colors";

interface SkillsProps {
    title: string;
    skills: Array<{name: string, rating: number}>;
}

const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
  return (
    <>
        <h3 style={{color: colors[randomColor]}}>{title}</h3>
        {skills.map((skill, index) => (
          <p key={index} className={styles.skills}>
            <span>{skill.name}</span>
            <span className={styles.rating}>{[...Array(skill.rating)].map(() => '\u25cf')}<span>{[...Array(5 - skill.rating)].map(() => '\u25cf')}</span></span>
          </p>
        ))}
    </>
  )
}
export default Skills;