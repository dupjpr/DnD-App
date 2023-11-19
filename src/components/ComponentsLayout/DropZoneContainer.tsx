import React, { useContext } from 'react';
import DropZone from '../DropZone/DropZone';
import { AppContext } from '../../context/appContext';
import { constants } from '../../utils/constants';



const DropZoneContainer = () => {
  const dataContext = useContext<any>(AppContext);
  const { BUTTON, CONTAINER} = constants;
  const { data, setData } = dataContext
  const { layout } = data;

  const acceptTypeComponents = [BUTTON.type, CONTAINER.type];

  console.log('monitor data', data);
  

  return (
    <div>
      <DropZone 
        name={layout.dropZone.name} 
        types={acceptTypeComponents} 
      />
    </div>
  )
}

export default DropZoneContainer