import { createBoard } from '@wixc3/react-board';
import { FooterStats } from '../../../components/widgets/social-care-providers/footer-stats/footer-stats';

export default createBoard({
    name: 'FooterStats',
    Board: () => <FooterStats  currentYearTotal={2020} initialTotal={2001}/>,
    isSnippet: true,
});
