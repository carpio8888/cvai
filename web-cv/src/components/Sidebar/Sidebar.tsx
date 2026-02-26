import { Profile } from './Profile';
import { ContactCard } from './ContactCard';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  name: string;
  bio: string;
  contacts: Array<{ label: string; value: string; href: string; icon: string }>;
}

export const Sidebar = ({ name, bio, contacts }: SidebarProps) => (
  <aside className={styles.sidebar}>
    <Profile name={name} bio={bio} />
    <ContactCard contacts={contacts} />
  </aside>
);
