import React, {createContext, useReducer, useState} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
};

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children }) => {
    // const [state, dispatch] = useReducer(AppReducer, initialState)
    const [user, setUser] = useState(initialState)

    return (<GlobalContext.Provider value={{ 
        user: user
        }}>
        {children}
    </GlobalContext.Provider>)

}

export const tokenConfig = getState => {
    //get token from localStorage
    const token = getState().auth.token;

    //set token in Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    //if token, then add to headers
    if (token) {
        config.header['x-auth-token'] = token;
    }

    return config;
}