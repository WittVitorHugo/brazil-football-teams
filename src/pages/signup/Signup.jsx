import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const usersStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = usersStorage?.filter((user) => user.email === email)

        if (email === '' || password === '') {
            alert('Email e senha obrigatórios!')
            return;
        }

        if (hasUser?.length) {
            alert('Este email já está sendo utilizado!')
            return;
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }]
        } else {
            newUser = [{ email, password }]
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        alert('Cadastro realizado com sucesso!')

        navigate('/signin')
    }


    return (
        <div className='container-signup'>
            <h1>Cadastro</h1>
            <form>
                <p>Email</p>
                <input
                    type='text'
                    onChange={handleEmail}
                    value={email}
                />
                <p>Senha</p>
                <input
                    type='password'
                    onChange={handlePassword}
                    value={password}
                />
                <button
                    type='submit'
                    onClick={handleSubmit}
                >Cadastrar</button>
            </form>
        </div>
    )
}

export default Signup
