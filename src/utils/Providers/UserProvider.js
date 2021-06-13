import React from 'react';
import UserContext from '../Contexts/UserContext';
import useStorage from '../Hooks/useStorage';

const UserProvider = ({ children }) => {
    const [token, setToken] = useStorage('acess_token')

    return (
        <UserContext.Provider
            value={{
                token,
                setToken
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;