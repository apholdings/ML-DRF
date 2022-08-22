import {
    GET_LINEAL_REGRESSION_DATA_SUCCESS,
    GET_LINEAL_REGRESSION_DATA_FAIL
} from './types'
import axios from 'axios';

export const get_lineal_regression = () => async dispatch => {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    try{

        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/ml/regresion-lineal`,
            config
        );

        if (res.status === 200) {
            dispatch({
                type: GET_LINEAL_REGRESSION_DATA_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: GET_LINEAL_REGRESSION_DATA_FAIL,
            });
        }

    }catch{
        dispatch({
            type: GET_LINEAL_REGRESSION_DATA_FAIL,
        });
    }
}