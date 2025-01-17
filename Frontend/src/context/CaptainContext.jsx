import React, { useState } from 'react'
import { createContext } from 'react';


export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
  
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const UpdateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value ={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        UpdateCaptain
    };


    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext