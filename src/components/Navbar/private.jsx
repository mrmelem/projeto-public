import React, { useContext } from 'react';
import UserContext from '../../utils/Contexts/UserContext';

const Navbar = () => {
    const { setToken } = useContext(UserContext)

    return (
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/dashboard">Dashboard</a>
            </li>
            <li>
                <button
                    onClick={() => { setToken(null) }}
                >
                    Sair
                </button>
            </li>
        </ul>
    );
}

export default Navbar;