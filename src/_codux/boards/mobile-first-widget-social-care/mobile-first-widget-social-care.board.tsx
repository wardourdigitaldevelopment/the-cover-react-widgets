import { createBoard } from '@wixc3/react-board';
import { MobileFirstWidgetSocialCare } from '../../../components/widgets/social-care-providers/mobile-first-widget-social-care/mobile-first-widget-social-care';

export default createBoard({
    name: 'MobileFirstWidgetSocialCare',
    Board: () => <MobileFirstWidgetSocialCare />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 371,
        windowHeight: 667,
    },
});
