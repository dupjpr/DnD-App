import { constants } from './constants';
import Button from "../components/Button";
import Container from "../components/Container";

const componentsCreator = (data: any) => {

  const { BUTTON, CONTAINER } = constants;

  const component = data.map((item: any) => {
    const typeComponent = item.type
    
    let renderComponent;

    switch (typeComponent) {
      case BUTTON.type:
        renderComponent = <Button name={item.name} id={item.id} text={item.text} type={item.type}/>
        break;
    
      case CONTAINER.type:
        renderComponent = <Container name={item.name} id={item.id} type={item.type} canDrop={item.canDrop}/>
        break;
    
      default:
        // Código a ejecutar si ninguna de las opciones anteriores coincide
        break;
    }
    return renderComponent
  })

  return component
  
}

export default componentsCreator
