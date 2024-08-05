import classNames from 'classnames';
import styles from './regional-statistic.module.scss';
import Reel from '../../../../libs/reels';

export interface RegionalStatisticProps {
    className?: string;
    regionLabel: string;
    regionStat: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RegionalStatistic = ({ className, regionLabel, regionStat }: RegionalStatisticProps) => {
    return (
        <div className={styles['region-stat']}>
            <div className={styles['region-stat__heading']}>{regionLabel}</div>
            <div className={styles['region-stat__heading']}>
              <Reel theme={styles} text={regionStat?.toString()} />
            </div>
        </div>
    );
};
