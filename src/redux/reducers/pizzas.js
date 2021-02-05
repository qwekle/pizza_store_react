let initialState = {
    items: [],
    isLoaded: false,
}


const pizzas = (state = initialState, action) => {
    switch (action) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                //isLoaded: true,
            }
        default:
            return {
                ...state
            }
    }
}
export default pizzas;