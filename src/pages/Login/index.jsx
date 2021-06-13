import React, { useState, useContext } from 'react';
import UserContext from '../../utils/Contexts/UserContext';

import Navbar from '../../components/Navbar';
import Center from '../../components/Center';
import { useHistory } from 'react-router';

function UserLogin({ user, key }) {
    if (user === 'pedro' && key === 'ph193456') {
        return { token: 'ok, tudo válido' }
    }

    return { error: 'Usuário ou senha inválido' }
}


const Login = () => {

    const Initialstate = () => {
        return { user: '', key: '' }
    }

    const [values, setValues] = useState(Initialstate);
    const { token, setToken } = useContext(UserContext)
    const history = useHistory();

    if (token) {
        history.push('/dashboard');
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { token } = UserLogin(values)
        console.log(token);
        if (token) {
            setToken(token)
            return history.push('/dashboard')
        }


    }

    function onChange(e) {
        const { value, name } = e.target

        setValues({ ...values, [name]: value })
    }

    return (
        <>
            <Navbar />

            <Center>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <input
                        type="text"
                        placeholder="Usuário ou Email"
                        name="user"
                        value={values.user}
                        onChange={onChange}
                    />

                    <input
                        type="text"
                        placeholder="Senha"
                        name="key"
                        value={values.key}
                        onChange={onChange}
                    />

                    <button
                        type="submit"
                    >
                        Entrar
                    </button>


                    <span>
                        Esqueceu sua senha?
                        <a href="/recovery">
                            Clique aqui
                        </a>
                        ou
                        <a href="/register">
                            Cadastre
                        </a>
                    </span>

                </form>
            </Center>
        </>
    )
}

export default Login;