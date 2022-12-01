import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading }  from './isLoading.slice';

export const newsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProducts: (state, action) => {
            return action.payload
        }

    }
})

export const getNewsThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
      .then(res => dispatch(getProducts(res.data.data.products)))
      .finally(() => dispatch(setIsLoading(false)));
}

export const filterProductsThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(getProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const  filterHeadlineThunk= (inputSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}
    `)
        .then(res => dispatch(getProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { getProducts } = newsSlice.actions;

export default newsSlice.reducer;
