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
                    <h1>Cadastro</h1>

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
                        Finalizar
                    </button>


                    <span>
                        Já possui uma conta?
                        <a href="/login">
                            Faça login
                        </a>
                    </span>

                </form>
            </Center>
        </>
    )
}

export default Login;