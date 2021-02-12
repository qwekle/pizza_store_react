import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})
export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${
        category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(response => {
        dispatch(setPizzas(response.data))
    })
}

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
})