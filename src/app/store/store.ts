import { Action } from '@ngrx/store';

const initState = {
    number: 0
};

export interface StoreInterface {
    counter: Counter;
}

export interface Counter {
    number: number;
}

interface StateAction {
    type: string;
    payload: any;
}


const INCEMENT = 'increment';
const DECEMENT = 'decrement';

export function counterReducer(state = initState, action: StateAction) {

    switch (action.type) {
        case INCEMENT: return {
            number: state.number + (action.payload ? action.payload : 1),
        };
        case DECEMENT: return {
            number: state.number - (action.payload ? action.payload : 1),
        };
        default: return state;
    }
}

export class IncrementAction implements Action {
    type = INCEMENT;
    constructor(public payload: any) { }
}


export class DecrementAction implements Action {
    type = DECEMENT;
    constructor(public payload: any) { }
}


