import classNames from 'classnames';
import styles from './footer-stats.module.scss';
import IconArrowSvg from '../../../../assets/icon-arrow.svg';
// @ts-ignore
import Reel from '../../../../libs/reels';
import { useEffect, useState } from 'react';
export interface FooterStatsProps {
    className?: string;
    currentYearTotal: number;
    initialTotal: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FooterStats = ({ className, currentYearTotal, initialTotal }: FooterStatsProps) => {
    const [percentageChange, setPercentageChange] = useState('0');

    useEffect(() => {
        let newPercentage = (((currentYearTotal - initialTotal) / initialTotal) * 100).toFixed(2);
        setPercentageChange(newPercentage);
    }, [currentYearTotal]);

    const rightColumnClass = styles['right-column'];
    const rightColumnVisibleClass =
        parseFloat(percentageChange) > 0 ? styles['right-column--visible'] : '';

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['left-column']}>
                <p className={styles['text-total']}>Total</p>
                <Reel theme={styles} text={currentYearTotal?.toString()} />
            </div>
            <div className={`${rightColumnClass} ${rightColumnVisibleClass}`}>
                <div className={styles['text-year']}>
                    <p className={styles['text-year__content']}>Since 2019</p>
                </div>
                <div className={styles['percentage-change']}>
                    <img src={IconArrowSvg} alt="" className={styles['percentage-change__image']} />
                    <div className={styles['percentage-change__text']}>
                        <Reel theme={styles} text={`${percentageChange}%`} />
                    </div>
                </div>
            </div>
        </div>
    );
};
