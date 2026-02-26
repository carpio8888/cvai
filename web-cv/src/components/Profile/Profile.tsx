import styles from './Profile.module.scss';

interface ProfileProps {
  name: string;
  bio: string;
}

export const Profile = ({ name, bio }: ProfileProps) => (
  <div className={styles.profile}>
    <div className={styles.profileName}>{name}</div>
    <div className={styles.profileBio}>{bio}</div>
  </div>
);
