import React, { useContext } from 'react';
import UserContext from '../../utils/Contexts/UserContext';

import Public from './public';
import Private from './private';

const Navbar = () => {
    const { token } = useContext(UserContext);

    if (token) {
        return (
            <nav>
                <Private />
            </nav>
        );
    }

    return (
        <nav>
            <Public />
        </nav>
    )
}

export default Navbar;