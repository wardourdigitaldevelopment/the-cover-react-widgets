import classNames from 'classnames';
import styles from './button-grid.module.scss';
import { Button } from '../../../primiative-components/button/button';

export interface ButtonGridProps {
    className?: string;
    activeButton: number | string;
    buttonsData: number[] | string[];
    updateSelectedYear: (index: number) => void;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ButtonGrid = ({ className, updateSelectedYear, buttonsData, activeButton }: ButtonGridProps) => {
    return <div data-el="button-grid" className={styles['button-grid']}>
        {buttonsData.map((data, index) => <Button key={index} buttonLabel={data}  isActive={activeButton === data} buttonEvent={updateSelectedYear} index={index}/>)}
    </div>;
};
