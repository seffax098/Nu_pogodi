import cn from 'classnames';
import type { ReactNode } from 'react';

import styles from './ScreenPanel.module.less';

export interface ScreenPanelProps {
  title: string;
  /** Крупный заголовок-логотип для стартового экрана */
  logo?: boolean;
  /** Вся панель — кнопка (например, «продолжить» на паузе) */
  onClick?: () => void;
  children?: ReactNode;
}

/** Панель в стиле ЖК поверх экрана игры */
export const ScreenPanel = ({ title, logo, onClick, children }: ScreenPanelProps) => {
  const Title = logo ? 'h1' : 'h2';
  const content = (
    <>
      <Title className={cn(styles.title, logo && styles.logo)}>{title}</Title>
      {children}
    </>
  );

  return (
    <div className={styles.overlay}>
      {onClick ? (
        <button type="button" className={cn(styles.panel, styles.clickable)} onClick={onClick}>
          {content}
        </button>
      ) : (
        <div className={styles.panel}>{content}</div>
      )}
    </div>
  );
};
