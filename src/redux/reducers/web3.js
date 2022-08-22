import {
    LOAD_ETHEREUM_BALANCE_SUCCESS,
    LOAD_ETHEREUM_BALANCE_FAIL,
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_NETWORK_SUCCESS,
    LOAD_NETWORK_FAIL,
    SET_LOADING,
} from '../actions/types'

const initialState = {
    account: null,
    network: null,
    ethereum_balance: null,
    loading: null,
};

export default function web3(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_NETWORK_SUCCESS:
            return {
                ...state,
                network: payload,
            };
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                account: payload,
            };
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null,
            };
        case LOAD_NETWORK_FAIL:
            return {
                ...state,
                network: null,
            };
        case LOAD_ETHEREUM_BALANCE_SUCCESS:
            return {
                ...state,
                ethereum_balance: payload,
            };
        case LOAD_ETHEREUM_BALANCE_FAIL:
            return {
                ...state,
                ethereum_balance: null,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: payload,
            };
        default:
            return state;
    }
}