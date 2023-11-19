import React, {useState} from 'react';
import Button from './Button';
import DragDropZone from './Container';
import { useDrag, useDrop } from 'react-dnd';

const dropZoneStyle = {
  width: '300px',
  height: '200px',
  border: '2px dashed gray',
  padding: '10px',
  margin: '20px',
};


const DropZone = ({name}:any) => {

  console.log(name);
  

  const [elements, setElements] = useState<any>([]);

  const [{ isOver, canDropp }, drop] = useDrop({
    accept: ['BUTTON', 'DRAG_ZONE'],
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDropp: !!monitor.canDrop()
    }),
    canDrop: (item) => handleCanDrop(item),
    
  });

  const handleCanDrop = (item:any) => {

    let flag = true

    if(elements.length > 0){
      flag = false
    }

    return  flag
    

  }
  
  console.log('??????',canDropp);
  
  const handleDrop = (item:any) => {
    console.log(item);

    const objetoYaEnArray = elements.some((element:any) => element.id === item.id);

    if (!objetoYaEnArray && name === 'mainZone'){
      setElements((elements:any) => [...elements, item])
    }
  }


  const componentsCreator = () => {


    const result = elements.map((item:any) => {
      const variable = item.type

      let resultado;

      switch (variable) {
        case 'BUTTON':
          resultado = <Button key={item.id} id={item.id} text={item.text} index={item.index}/>
          break;
      
        case 'DRAG_ZONE':
          resultado = <DragDropZone name={item.name}/>
          break;
      
        default:
          // Código a ejecutar si ninguna de las opciones anteriores coincide
          break;
      }
      return resultado
    })

    return result
    
  }
  
  

  return (
    <div ref={drop} style={{ ...dropZoneStyle, backgroundColor: canDropp ? 'lightgreen' : 'white' }}>
      {componentsCreator()}
    </div>
  );
};


export default DropZone