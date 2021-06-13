import React, { useState, useContext } from 'react';
import UserContext from '../../utils/Contexts/UserContext';

import { useHistory } from 'react-router';

const Forms = ({ UserLogin }) => {

    const Initialstate = () => {
        return { user: '', key: '' }
    }

    const [values, setValues] = useState(Initialstate);
    const [error, setError] = useState(null)
    const { setToken } = useContext(UserContext)
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const { token, error } = UserLogin(values)
        if (token) {
            setToken(token)
            return history.push('/dashboard')
        }
        setError(error);
        setValues(Initialstate);
    }

    function onChange(e) {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
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
                type="password"
                placeholder="Senha"
                name="key"
                value={values.key}
                onChange={onChange}
            />

            {error && (<div className="login-error">{error}</div>)}

            <button type="submit">
                Entrar
            </button>

            <span>Esqueceu sua senha? <a href="/recovery">Clique aqui </a>ou <a href="/register">Cadastre.</a></span>
        </form>
    );
}

export default Forms;