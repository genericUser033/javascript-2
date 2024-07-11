import {DECREMENT} from "./constants";

export const deposit = (payload) => {
    return {
        type: INCREMENT,
        payload: payload
    }
}

export const withdraw = (payload) => {
    return {
        type: DECREMENT,
        payload: payload
    }
}