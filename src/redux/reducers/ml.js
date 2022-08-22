import {
    GET_LINEAL_REGRESSION_DATA_SUCCESS,
    GET_LINEAL_REGRESSION_DATA_FAIL,
} from "../actions/types";

const initialState = {
    lineal_regression:null
};


export default function ml(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_LINEAL_REGRESSION_DATA_SUCCESS:
            return {
                ...state,
                lineal_regression: payload,
            };
        case GET_LINEAL_REGRESSION_DATA_FAIL:
            return {
                ...state,
                lineal_regression: null,
            };
        default:
            return state;
    }
}