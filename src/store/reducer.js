import * as actionTypes from './actions/actionTypes'

const initalState = {
    products: null,
    orders: [],

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_OFFERS:
            const newProducts = [];
            action.products.forEach(element => {
                newProducts.push({
                    name: element.gsx$name.$t,
                    available: element.gsx$vorhanden.$t,
                    producer: element.gsx$produzent.$t,
                    category: element.gsx$kategorie.$t,
                    desc: element.gsx$beschreibung.$t,
                    id: element.gsx$id.$t,
                    price: element.gsx$preis.$t
                });
            });
            return {
                ...state,
                products: newProducts
            }
        case actionTypes.SAVE_ORDER:

            if (state.orders[0] === undefined) {
                action.order.amount = 1;
                return {
                    ...state,
                    orders: state.orders.concat(action.order)
                }
            } else {
                const newOrders = [...state.orders]
                let loopCounter = 0;
                let foundDuplicate = false;

                newOrders.forEach(element => {
                    loopCounter++;
                    if (element.name === action.order.name) {
                        element.amount++;
                        foundDuplicate = true;
                    }
                    if (loopCounter >= newOrders.length) {
                        if (foundDuplicate) {
                            return;
                        } else {
                            action.order.amount = 1;
                            newOrders.push(action.order)
                        }
                    }
                });


                return {
                    ...state,
                    orders: newOrders
                }
            }



        case actionTypes.DELETE_ORDER:
            const updateOrders = [...state.orders];
            const filteredArray = state.orders.filter((order, index) => order.name !== action.order.name);
            return {
                ...state,
                orders: filteredArray
            }



        default:
            return state;
    }
}

export default reducer;