import { useReducer } from "react";
import { ActionType } from "./ActionType";

export const initialState = {
  basket: []
//   user: null,
};
export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_BASKET:
            return {            
                ...state,
                basket: [...state.basket, action.item]
            };
                default:
                    return state;   
            };      
        }  

// const [state,dispatch]=useReducer(reducer, initialState);