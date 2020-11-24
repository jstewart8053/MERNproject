//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};