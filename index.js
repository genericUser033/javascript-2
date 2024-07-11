// import { createStore } from 'https://cdn.skypack.dev/redux@4';

function createStore(reducer) {
    let state = reducer(undefined, {})
    const subscribers = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(subscriber) {//subscriber: a callback function
            subscribers.push(subscriber);
        }
    }
}

const initialState = 0;

// Reducer
function bankReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
}

// store
const store = window.store = createStore(bankReducer); // add window.store so as we can access store from browser's console

//actions
function actDeposit(payload) {
    return {
        type: 'INCREMENT',
        payload: payload
    }
}

function actWithdraw(payload) {
    return {
        type: 'DECREMENT',
        payload: payload
    }
}

// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')

// event handler
deposit.onclick = function() {
    store.dispatch(actDeposit(10));
}

withdraw.onclick = function() {
    store.dispatch(actWithdraw(10));
}

// Listener?
store.subscribe(() =>  render()) // when state changes, it will execute this function

function render() {
    const output = document.querySelector('#output')
    output.innerText = store.getState();
}

render();