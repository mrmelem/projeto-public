import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import Center from '../../components/Center';

const Login = () => {

    const Initialstate = () => {
        return { user: '', key: '' }
    }

    const [values, setValues] = useState(Initialstate);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values);
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
                    <h1>Recuperar conta</h1>

                    <input
                        type="email"
                        placeholder="Digite seu email aqui"
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
                        Finalizar
                    </button>


                    <span>
                        Não possui uma conta?
                        <a href="/register">
                            Registre-se
                        </a>
                    </span>

                </form>
            </Center>
        </>
    )
}

export default Login;