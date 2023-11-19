import React, {useState, useContext} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { AppContext } from '../context/appContext';
import componentsCreator from '../utils/componentsCreator';

const Container = ({name, id, type, canDronnp}:any) => {

  const [ dropZoneName, setDropZoneName ] = useState<any>([]);
  const dataContext = useContext<any>(AppContext);

  const { data, setData } = dataContext;

  console.log('canDrop', canDronnp);
  

  const [ {isDragging} , drag] = useDrag({
    type: type,
    item: { name, id, type, canDronnp },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ canDropp, isOver }, drop] = useDrop({
    accept: ['BUTTON'],
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver( {shallow: true }),
      canDropp: !!monitor.canDrop()
    }),
    canDrop: () => canDronnp
  });

  const handleDrop = (item: any) => {
    
    setData({...data}, data.structure.containerDropZone=[...data.structure.containerDropZone, item])
    
  }

  console.log('isOver', isOver);
  

  const components = componentsCreator(data.structure.containerDropZone)
  return (
    <div 
      ref={(node) => drag(drop(node))} 
      style={{
        background: canDropp ? 'pink':'yellow',
        width: '200px',
        height: '200px'
      }}
    >
      {components}
    </div>
  )
}

export default Container