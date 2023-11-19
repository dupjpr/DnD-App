import { useDrag } from 'react-dnd';

function Button({ name, id, text, type }:any) {
  
  const [ {isDragging} , drag] = useDrag({
    type: type,
    item: { name, id, text, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }), 
  });
  
  return (
    <button   
      ref={drag} 
      style={{
        background: isDragging ? 'orange': 'green'
      }}
    >
      {text}
    </button>
  );
}

export default Button