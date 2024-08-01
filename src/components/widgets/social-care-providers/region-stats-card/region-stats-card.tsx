import classNames from 'classnames';
import styles from './region-stats-card.module.scss';

export interface RegionStatsCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const RegionStatsCard = ({ className }: RegionStatsCardProps) => {
    return <div className={`${className}`}>RegionStatsCard</div>;
};
