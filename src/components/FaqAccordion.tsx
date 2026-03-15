import React, {useId, useState} from 'react';
import clsx from 'clsx';
import styles from './FaqAccordion.module.css';

type FaqAccordionProps = {
  children: React.ReactNode;
  className?: string;
};

type FaqItemProps = {
  question: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
};

export function FaqAccordion({
  children,
  className,
}: FaqAccordionProps): React.ReactElement {
  return <div className={clsx(styles.accordion, className)}>{children}</div>;
}

export function FaqItem({
  question,
  children,
  className,
  defaultOpen = false,
}: FaqItemProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={clsx(styles.item, className)}>
      <button
        type="button"
        className={clsx(styles.question, isOpen && styles.questionOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{question}</span>
      </button>
      {isOpen ? (
        <div id={panelId} className={styles.answer}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
