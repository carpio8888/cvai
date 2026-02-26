import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './ResumeMarkdown.module.scss';

interface ResumeMarkdownProps {
  markdown: string;
}

export const ResumeMarkdown = ({ markdown }: ResumeMarkdownProps) => (
  <div className={styles.resumeMarkdown}>
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
  </div>
);
