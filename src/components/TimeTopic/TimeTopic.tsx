import styles from './timetopic.module.scss';

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
    <>
        <div className={styles.timetopic}>
            <div className={styles.period}>{start}{end && ' - ' + end}</div>
            <div className={styles.topic}>
                <strong>{topic}</strong>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            </div>
        </div>
    </>
  )
}
export default TimeTopic