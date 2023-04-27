import styles from './timetopic.module.scss';
import { colors, randomColor } from "../../globals/colors";

interface TimeTopicProps {
    start: string;
    end?: string;
    topic: string;
    subtitle?: string;
}

// Do not work with margins in styling, as showmore element will not detect it
// Padding will work without issues

const TimeTopic: React.FC<TimeTopicProps> = ({start, end, topic, subtitle}) => {
  return (
        <div className={styles.timetopic}>
            <p style={{color: colors[randomColor]}} className={styles.period}>{start}{end && ' - ' + end}</p>
            <div className={styles.topic}>
                <p><strong>{topic}</strong></p>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </div>
  )
}
export default TimeTopic