import styles from './ContactCard.module.scss';

interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: string;
}

interface ContactCardProps {
  contacts: ContactInfo[];
}

export const ContactCard = ({ contacts }: ContactCardProps) => (
  <div className={styles.contactCard}>
    <h2>Contact</h2>
    <ul>
      {contacts.map((item) => {
        const isMail = typeof item.href === 'string' && item.href.startsWith('mailto:');
        return (
          <li key={item.label}>
            <a href={item.href} target={isMail ? undefined : '_blank'} rel={isMail ? undefined : 'noopener noreferrer'}>
              <span className={styles.contactIcon}>{item.icon}</span>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>{item.label}:</span>
                <span className={styles.contactValue}>{item.value}</span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);
