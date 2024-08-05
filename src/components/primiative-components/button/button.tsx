import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    buttonLabel: number | string;
    isActive: boolean;
    index: number;
    buttonEvent: (index: number) => void
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className, buttonLabel, isActive, buttonEvent, index }: ButtonProps) => {
    return <button
      className={classNames(styles.root, isActive && styles.active)}
      onClick={() => buttonEvent(index) }
    >{buttonLabel}</button>;
};
