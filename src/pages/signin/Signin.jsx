import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from "../../hooks/useAuth"
import './Signin.css'

const Signin = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }


    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleLogin = () => {

        const response = signin(email, password);

        if (response) {
            alert(response);
            return;
        }

        navigate('/home');
    }

    return (
        <div className='container-signin'>
            <h1>Login</h1>
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
                    onClick={handleLogin}
                >Entrar</button>
                <span>
                    Cadastre-se
                    <strong>
                        <Link to='/signup'>
                            &nbsp;AQUI
                        </Link>
                    </strong>
                </span>
            </form>
        </div>
    )

}

export default Signin