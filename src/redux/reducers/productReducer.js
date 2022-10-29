import { actionType } from "../actions/types";

const initial = {
    products: []
}

const initialCats = {
    categories: []
}

export const allProductReducer = (state = initial,{type, payload}) => {
    switch (type) {
        case actionType.ALL_PRODUCTS:
            return {...state, products:payload};
    
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {},{type, payload}) => {
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return {...state, ...payload};

        case actionType.REMOVE_SELECTED_PRODUCT:
            return {};
            
        default:
            return state;
    }
}

export const allCategoriesReducer = (state = initialCats,{type, payload}) => {
    switch (type) {
        case actionType.ALL_CATEGORIES:
            return {...state, products:payload};

        default:
            return state;
    }
}