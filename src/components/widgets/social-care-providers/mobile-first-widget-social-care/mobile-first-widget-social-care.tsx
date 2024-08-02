import classNames from 'classnames';
import styles from './mobile-first-widget-social-care.module.scss';
import { Button } from '../../../primiative-components/button/button';
import { RegionalStatistic } from '../regional-statistic/regional-statistic';
import { FooterStats } from '../footer-stats/footer-stats';

export interface MobileFirstWidgetSocialCareProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const MobileFirstWidgetSocialCare = ({ className }: MobileFirstWidgetSocialCareProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['left-column']}>
                <h2 className={styles.heading}>Number of providers</h2>
                <div className={styles['content-wrapper']}>
                    <p className={styles.paragraph}>
                        This is the number of providers within England from 2019 - 2024
                    </p>
                    <p className={styles.paragraph}>
                        While there has been an increase in providers, demand is still outstripping
                        supply.
                    </p>
                </div>
                <div className={styles['button-grid']}>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
            <div className={styles['right-column']}>
                <h3 className={styles.subheading}>Regional Breakdown for 2024</h3>
                <div className={styles['region-stat-grid']}>
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                    <RegionalStatistic />
                </div>
                <FooterStats />
                <div className={styles['button-grid']}>
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                </div>
            </div>
        </div>
    );
};
