import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/primiative-components/button/button';

export default createBoard({
    name: 'Button',
    Board: () => <Button />,
    isSnippet: true,
});
