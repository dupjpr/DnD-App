import { constants } from '../utils/constants';

const getData = () => {

  const { BUTTON, CONTAINER } = constants;

  return {
    layout:{
      dropZone: { name: 'mainDropZone' },
    },
    structure: {
      mainDropZone: [],
      containerDropZone: []
    },
    components: [
      { name: BUTTON.name, type: BUTTON.type, id: 1, text: BUTTON.name },
      { name: CONTAINER.name, type: CONTAINER.type, id: 2, text: CONTAINER.name, canDrop: true },
    ]
  }


}

export default getData