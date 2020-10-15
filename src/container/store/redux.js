const initialState = {
    price:null
}

const reducer = (state=initialState, action) => {
    if(action.type==="PRICE"){
        return {
            ...state,
            price: action.price
        }
    }
    return state;
}

export default reducer