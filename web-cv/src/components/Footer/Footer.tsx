import styles from './Footer.module.scss';

interface FooterProps {
  copyright: string;
}

export const Footer = ({ copyright }: FooterProps) => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div></div>
      <div>{copyright}</div>
    </div>
  </footer>
);
