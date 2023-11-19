import React, { useContext } from 'react'
import { AppContext } from '../../context/appContext';
import componentsCreator from '../../utils/componentsCreator';

const ComponentsContainer = () => {
  const dataContext = useContext<any>(AppContext);
  const { data } = dataContext

  console.log(dataContext);
  
  const components = componentsCreator(data.components);

  return (
    <div style={{background:'red', width: '400px'}}>
      {components}
    </div>
  );
}

export default ComponentsContainer