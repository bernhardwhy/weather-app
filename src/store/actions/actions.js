import * as actionTypes from './actionTypes'
import * as localWeatherData from '../../weather.json'
import axios from 'axios'

export const saveOffers = (products) => {
    return {
        type: actionTypes.SAVE_OFFERS,
        products: products
    }
}

export const saveOrder = (order) => {
    return {
        type: actionTypes.SAVE_ORDER,
        order: order
    }
}

// http://api.openweathermap.org/data/2.5/forecast?q=Vienna,aut&units=metric&appid=0bee7f603cebdac682463d1983e540a6

export const getOffers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                console.log(localWeatherData);

                // dispatch(saveOffers(response));
            }).catch(error => {
                console.log(error);

            });
    }
};

export const deleteElement = (order, index) => {
    return {
        type: actionTypes.DELETE_ORDER,
        order: order,
        index: index
    }
}


