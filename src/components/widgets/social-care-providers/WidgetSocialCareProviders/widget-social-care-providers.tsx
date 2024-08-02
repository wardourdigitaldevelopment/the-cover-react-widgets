import classNames from 'classnames';
import styles from './widget-social-care-providers.module.scss';
import { Button } from '../../../primiative-components/button/button';

export interface WidgetSocialCareProvidersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const WidgetSocialCareProviders = ({ className }: WidgetSocialCareProvidersProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['left-column']}>
                <h2 className={styles.heading}>Number of providers</h2>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        While there has been an increase in providers, demand is still outstripping
                        supply.
                    </p>
                    <p className={styles.paragraph}>
                        This is the number of providers within England from 2019 - 2024.
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
                <div className={styles['stats-grid']}>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                    <div className={styles['region-stat']}>
                        <div className={styles['region-stat-heading']}>South East</div>
                        <div className={styles['region-stat-value']}>2000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
