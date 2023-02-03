import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const usersStorage = localStorage.getItem('users_db');
        const usersToken = localStorage.getItem('user_token');

        if (usersStorage && usersToken) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(usersToken).email
            );

            if (hasUser)
                setUser(hasUser[0]);
        }
    }, [])

    const signin = (email, password) => {


        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);


        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(16).substring(2);
                localStorage.setItem('user_token', JSON.stringify({ email, token }))
                setUser({ email, password })
            } else {
                alert('Email ou Senha invalidos!');
                return;
            }
        } else {
            alert('Email não cadastrado!')
            return;
        }


    }

    const signup = (email, password) => {

        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            alert('Email já cadastrado!')
            return;
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }]
        }

        localStorage.setItem('users_db', JSON.stringify(newUser));

    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    }

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
}
