import React, { createContext, useState } from 'react';
import getData from './data';

// Crear el contexto con un valor inicial (puede ser cualquier valor)
const AppContext: any = createContext('');

// Crear un proveedor para envolver tu aplicación y proporcionar el contexto
const AppProvider = ({ children }: any) => {

  const initialData = getData();

  const [ data, setData ] = useState<any>(initialData)
  // Puedes proporcionar un valor inicial aquí si lo deseas
  // const contextValue: any = { name:'context' };

  return (
    <AppContext.Provider value=
      {{
        data, 
        setData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };