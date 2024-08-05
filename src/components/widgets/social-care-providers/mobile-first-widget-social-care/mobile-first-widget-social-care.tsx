import classNames from 'classnames';
import styles from './mobile-first-widget-social-care.module.scss';
import { RegionalStatistic } from '../regional-statistic/regional-statistic';
import { FooterStats } from '../footer-stats/footer-stats';
import { ButtonGrid } from '../button-grid/button-grid';
import regionalData from '../../../../data/social-care-providers'
import { useEffect, useState } from 'react';

export interface MobileFirstWidgetSocialCareProps {
    className?: string;
}

export const MobileFirstWidgetSocialCare = ({ className }: MobileFirstWidgetSocialCareProps) => {

    const [currentYearIndex, setCurrentYearIndex] = useState(0)
    const [currentYear, setCurrentYear] = useState(regionalData[currentYearIndex])
    const initialTotal = regionalData[0].total

    useEffect(() => {
        setCurrentYear(regionalData[currentYearIndex])
    }, [currentYearIndex])
    const updateCurrentYear = (index: number) => {
        setCurrentYearIndex(index)
    }

    const yearLabels = regionalData.map(region => region.year)

    const regionStatistics = currentYear.regions
      .map(region => <RegionalStatistic key={region.region}  regionLabel={region.region} regionStat={region.total}/>)

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
                <ButtonGrid
                  activeButton={currentYear.year}
                  buttonsData={yearLabels}
                  updateSelectedYear={updateCurrentYear}
                />
            </div>
            <div className={styles['right-column']}>
                <h3 className={styles.subheading}>Regional Breakdown for {currentYear.year}</h3>
                <div className={styles['region-stat-grid']}>
                    {regionStatistics}
                </div>
                <FooterStats currentYearTotal={currentYear.total} initialTotal={initialTotal} />
                <ButtonGrid
                  activeButton={currentYear.year}
                  buttonsData={yearLabels}
                  updateSelectedYear={updateCurrentYear}
                />
            </div>
        </div>
    );
};
