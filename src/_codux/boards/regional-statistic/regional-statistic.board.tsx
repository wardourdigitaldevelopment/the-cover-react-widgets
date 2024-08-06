import { createBoard } from '@wixc3/react-board';
import { RegionalStatistic } from '../../../components/widgets/social-care-providers/regional-statistic/regional-statistic';

export default createBoard({
    name: 'RegionalStatistic',
    Board: () => <RegionalStatistic regionLabel="Region" regionStat={300} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 460,
    },
});
