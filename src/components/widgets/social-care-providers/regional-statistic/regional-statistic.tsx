import classNames from 'classnames';
import styles from './regional-statistic.module.scss';

export interface RegionalStatisticProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RegionalStatistic = ({ className }: RegionalStatisticProps) => {
    return (
        <div className={styles['region-stat']}>
            <div className={styles['region-stat-heading']}>South East</div>
            <div className={styles['region-stat-value']}>2000</div>
        </div>
    );
};
