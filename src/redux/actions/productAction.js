import { actionType } from "./types"

export const allProductAction = (products) => {
    return {
        type: actionType.ALL_PRODUCTS,
        payload: products
    }
}

export const selectedProductAction = (product) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProductAction = (product) => {
    return {
        type: actionType.REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}

export const allCategoriesAction = (categories) => {
    return {
        type: actionType.ALL_CATEGORIES,
        payload: categories
    }
}