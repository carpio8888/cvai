import { Sidebar } from '../Sidebar/Sidebar';
import { ResumeMarkdown } from '../ResumeMarkdown/ResumeMarkdown';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  name: string;
  bio: string;
  contacts: Array<{ label: string; value: string; href: string; icon: string }>;
  resumeMarkdown: string;
}

export const MainLayout = ({ name, bio, contacts, resumeMarkdown }: MainLayoutProps) => (
  <div className={styles.layout}>
    <Sidebar name={name} bio={bio} contacts={contacts} />
    <main className={styles.main}>
      <ResumeMarkdown markdown={resumeMarkdown} />
    </main>
  </div>
);
