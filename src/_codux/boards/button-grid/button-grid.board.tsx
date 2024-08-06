import { createBoard } from '@wixc3/react-board';
import { ButtonGrid } from '../../../components/widgets/social-care-providers/button-grid/button-grid';

export default createBoard({
    name: 'ButtonGrid',
    Board: () => <ButtonGrid
      activeButton={2021}
      buttonsData={[2021, 2020]}
      updateSelectedYear={() => 2021}/>,
    isSnippet: true,
});
