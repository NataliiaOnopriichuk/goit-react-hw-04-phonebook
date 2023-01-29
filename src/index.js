import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import './index.css';

export const IsContactsContext = createContext();

const IsContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  return (
    <IsContactsContext.Provider
      value={{ contacts, setContacts}}
    >
      {children}
    </IsContactsContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsContactsContextProvider>
    <App />
    </IsContactsContextProvider>
  </React.StrictMode>
);
