import React, { useState, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import componentsCreator from '../../utils/componentsCreator';
import { AppContext } from '../../context/appContext';

const dropZoneStyle = {
  width: '300px',
  height: '200px',
  border: '2px dashed gray',
  padding: '10px',
  margin: '20px',
};


const DropZone = ({ name, types }:any) => {

  const dataContext = useContext<any>(AppContext);
  const { data, setData } = dataContext

  console.log('en drop zone',data);

  const { structure } = data;
  

  const [elements, setElements] = useState<any>([]);

  const [{ isOver, canDropp }, drop] = useDrop({
    accept: [...types],
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver({shallow: true }),
      canDropp: !!monitor.canDrop()
    }),
    
  });

  console.log('-----isOver', isOver);
  

  
  const handleDrop = (item:any) => {
    console.log('dropingggg', item);
    if (isOver) {
      setData({...data}, data.structure.mainDropZone=[...data.structure.mainDropZone, item])
    }
  }

  const components = componentsCreator(structure.mainDropZone)


  
  

  return (
    <div ref={drop} style={{ ...dropZoneStyle, backgroundColor: canDropp ? 'lightgreen' : 'white' }}>
      Drop - {name}
      {components}
    </div>
  );
};


export default DropZone