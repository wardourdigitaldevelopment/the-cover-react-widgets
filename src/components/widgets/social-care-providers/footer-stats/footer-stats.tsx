import classNames from 'classnames';
import styles from './footer-stats.module.scss';
import IconArrowSvg from '../../../../assets/icon-arrow.svg';

export interface FooterStatsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FooterStats = ({ className }: FooterStatsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['left-column']}>
                <p className={styles['text-total']}>Total</p>
                <p className={styles['numerical-total']}>29,090</p>
            </div>
            <div className={styles['right-column']}>
                <div className={styles['percentage-change']}>
                    <img src={IconArrowSvg} alt="" className={styles['percentage-change__image']} />
                    <p className={styles['percentage-change__text']}>15%</p>
                </div>
                <div className={styles['text-year']}>
                    <p className={styles['text-year__content']}>since 2019</p>
                </div>
            </div>
        </div>
    );
};
