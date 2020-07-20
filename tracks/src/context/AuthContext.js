import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import {AsyncStorage} from "react-native";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
};

//Scaffolding for functions
const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signup', payload: response.data.token})
        } catch (e) {
            dispatch({type: 'add_error', payload: 'Something went wrong w/ signup'})
        }
    };
};

const signin = (dispatch) => {
    return ({email, password}) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};


export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: ''}
);