import image from '../../assets/images/profile.jpg';
import styles from './profilepicture.module.scss';

const ProfilePicture = () => {
  return (
    <figure className={styles.profilepicture}>
      <img src={image} alt="Profile picture of Robbert Doon" />
    </figure>
  )
}
export default ProfilePicture