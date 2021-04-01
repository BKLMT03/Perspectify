import axios from 'axios';
import { returnErrors } from "./errorActions";
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
   } from './types';

   //check token and load user, req to /api/v1/auth

   export const loadUser = () => (dispatch, getState) => {
        //sets state is_loading to true
        dispatch({type: USER_LOADING});

        //fetch user, passing in token
        axios.get('/api/v1/auth', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
   }

   //setup config/headers and token 
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