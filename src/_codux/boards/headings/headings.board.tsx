import { createBoard } from '@wixc3/react-board';
import { Headings } from '../../../components/primiative-components/headings/headings';

export default createBoard({
    name: 'Headings',
    Board: () => <Headings />,
    isSnippet: true,
});
