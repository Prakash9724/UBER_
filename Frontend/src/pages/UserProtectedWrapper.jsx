import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {

    const { user, setUser } = useContext(UserDataContext);

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }

        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data;
                    setUser(data.user);
                    setIsLoading(false);
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

export default UserProtectedWrapper