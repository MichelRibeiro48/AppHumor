import {createContext, useState} from 'react';

export const ContextPhoto = createContext({});

export default function PhotoContextProvider({children}) {
  const [photo, setPhoto] = useState({});

  return (
    <ContextPhoto.Provider value={{photo, setPhoto}}>
      {children}
    </ContextPhoto.Provider>
  );
}
