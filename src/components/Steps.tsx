import type { ReactNode } from 'react';
import styles from './Steps.module.css';

interface StepProps {
  readonly children: ReactNode;
  readonly title: string;
}

interface StepsProps {
  readonly children: ReactNode;
}

export const Step = ({ children, title }: StepProps): ReactNode => (
  <li className={styles.step}>
    <h3 className={styles.stepTitle}>{title}</h3>
    <div className={styles.stepContent}>{children}</div>
  </li>
);

export const Steps = ({ children }: StepsProps): ReactNode => (
  <ol className={styles.steps}>{children}</ol>
);
