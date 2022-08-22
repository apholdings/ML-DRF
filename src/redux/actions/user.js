import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    SET_LOADING,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
    GET_MY_USER_DETAILS_SUCCESS,
    GET_MY_USER_DETAILS_FAIL
} from './types'
import axios from 'axios';

export const create_user = () => async dispatch => {
    if(window.ethereum){
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({
            account,
        });

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/user/create`,
                body,
                config
            );

            if (res.status === 201) {
                dispatch({
                    type: CREATE_USER_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: CREATE_USER_FAIL,
                });
                await dispatch({
                    type: SET_LOADING,
                    payload: false,
                });
            }
        } catch (err) {
            dispatch({
                type: CREATE_USER_FAIL,
            });
        }

    }
}

export const get_user_details = (account) => async dispatch => {
    
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        };
    
        const formData = new FormData();
        formData.append("account", account);

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/user/profile/${account}`,
                formData,
                config
            );

            if (res.status === 200) {
                dispatch({
                    type: GET_USER_DETAILS_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: GET_USER_DETAILS_FAIL,
                });
            }
        } catch (err) {
            dispatch({
                type: GET_USER_DETAILS_FAIL,
            });
        }
    
}

export const get_my_user_details = () => async dispatch => {
    if(window.ethereum){

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];

        const config = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };

        const formData = new FormData();
        formData.append("account", account);

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/user/profile/${account}`,
                formData,
                config
            );

            if (res.status === 200) {
                dispatch({
                    type: GET_MY_USER_DETAILS_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type: GET_MY_USER_DETAILS_FAIL,
                });
            }
        } catch (err) {
            dispatch({
                type: GET_MY_USER_DETAILS_FAIL,
            });
        }

    }

}