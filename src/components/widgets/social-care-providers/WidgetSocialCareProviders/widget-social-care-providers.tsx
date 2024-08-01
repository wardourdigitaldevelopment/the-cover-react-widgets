import classNames from 'classnames';
import styles from './widget-social-care-providers.module.scss';

export interface WidgetSocialCareProvidersProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WidgetSocialCareProviders = ({ className }: WidgetSocialCareProvidersProps) => {
    return <div className={classNames(styles.root, className)}>WidgetSocialCareProviders</div>;
};
