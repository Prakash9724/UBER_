import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);


    const [captain, setCaptain] = useState({
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
      
    });

 

    return (
        <CaptainDataContext.Provider value={{captain, setCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;