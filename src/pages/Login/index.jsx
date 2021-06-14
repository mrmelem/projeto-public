import React, { useContext } from 'react';
import UserContext from '../../utils/Contexts/UserContext';
import { useHistory } from 'react-router';
import api from '../../utils/API/axios';

import Navbar from '../../components/Navbar';
import Center from '../../components/Center';
import LoginForm from '../../components/Forms/LoginForm';

const Login = () => {

    const history = useHistory()

    const { token } = useContext(UserContext)

    if (token && history.push('/dashboard'));

    return (
        <>
            <Navbar />

            <Center>
                <LoginForm handleLogin={UserLogin} />
            </Center>
        </>
    )
}

export default Login;