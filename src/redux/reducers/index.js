import { combineReducers } from "redux";
import { allCategoriesReducer, allProductReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: allProductReducer,
    product: selectedProductReducer,
    allCategories: allCategoriesReducer
});