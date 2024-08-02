import { createBoard } from '@wixc3/react-board';
import { WidgetSocialCareProviders } from '../../../components/widgets/social-care-providers/WidgetSocialCareProviders/widget-social-care-providers';

export default createBoard({
    name: 'WidgetSocialCareProviders',
    Board: () => <WidgetSocialCareProviders />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 661,
        windowHeight: 667,
    },
});
