import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import './index.css';

export const ContactsContext = createContext();

const IsContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts}}
    >
      {children}
    </ContactsContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsContactsContextProvider>
    <App />
    </IsContactsContextProvider>
  </React.StrictMode>
);
