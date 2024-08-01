import { createBoard } from '@wixc3/react-board';
import { RegionStatsCard } from '../../../components/widgets/social-care-providers/region-stats-card/region-stats-card';

export default createBoard({
    name: 'RegionStatsCard',
    Board: () => <RegionStatsCard />,
    isSnippet: true,
});
