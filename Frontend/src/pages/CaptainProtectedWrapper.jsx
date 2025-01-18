import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({children}) => {
 
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)




    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }

             axios
            .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response => {
                if (response.status === 200) {
                    const data = response.data
                    setCaptain(data.captain)
                    setIsLoading(false)
                    console.log(data);
                    
                }
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });

            
            

    }, [token, navigate]);
    
    if(isLoading) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper