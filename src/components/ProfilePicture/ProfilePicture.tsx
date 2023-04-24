import image from '../../assets/images/profile.jpg';
import styles from './profilepicture.module.scss';

const ProfilePicture = () => {
  return (
    <img className={styles.profilepicture} src={image} alt="Profile picture of Robbert Doon" />
  )
}
export default ProfilePicture