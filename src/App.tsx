import React, { useState, useContext } from 'react';
import DropZone from './components/DropZone';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AppContext, AppProvider } from './context/appContext';
import ComponentsContainer from './components/ComponentsLayout/ComponentsContainer';
import DropZoneContainer from './components/ComponentsLayout/DropZoneContainer';

function App() {

  return (
    <div className="App">
      <AppProvider>
        <DndProvider backend={HTML5Backend}>
          <ComponentsContainer/>
          <DropZoneContainer/>
          {/* <DropZone name={'mainZone'} /> */}
        </DndProvider>
      </AppProvider>
    </div>
  );
}

export default App;
