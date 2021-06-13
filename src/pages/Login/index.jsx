import React, { useContext } from 'react';
import UserContext from '../../utils/Contexts/UserContext';
import { useHistory } from 'react-router';

import Navbar from '../../components/Navbar';
import Center from '../../components/Center';
import LoginForm from '../../components/Forms/LoginForm';

const Login = () => {
    function UserLogin({ user, key }) {
        if (user === 'pedromelem' && key === 'ph193456') return { token: '123' };
        return { error: "Usuário ou senha inválida" };
    }

    const history = useHistory()

    const { token } = useContext(UserContext)

    if (token && history.push('/dashboard'));

    return (
        <>
            <Navbar />

            <Center>
                <LoginForm UserLogin={UserLogin} />
            </Center>
        </>
    )
}

export default Login;