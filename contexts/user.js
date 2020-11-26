import React, {createContext, useState, useEffect} from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const ListenAuth = (userState) => {
        setUser(userState)
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener;
    }, []);

    /* FUNÇÃO PARA LOGAR NO APP*/
    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(resp => {
            //console.warn(resp);
        })
        .catch(err => {
            console.warn(err);
        })
    }

    /* FUNÇÃO PARA CRIAÇÃO DE CONTA NO APP */
    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(resp => {
            console.warn(resp);
        })
        .catch(err => {
            console.warn(err);
        })
    }

    /* FUNÇÃO DESLOGAR NO APP */
    const signOut = () => {
        firebase.auth().signOut()
        .then(resp => {
            alert('Usuário deslogado com sucesso!');
        })
        .catch(err => {
            console.warn(err);
        })
    }

    return (
        <UsuarioContext.Provider value={{user, signIn, signUp, signOut }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export {UsuarioContext, UsuarioProvider};