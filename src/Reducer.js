const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (item) => item.id === action.id)
            
            let newBasket = [...state.basket]
            if(index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id})`
                )
                
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export {initialState, reducer as default}