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

export function counterReducer(state = initState, action: StateAction) {

    switch (action.type) {
        case 'increment': return {
            number: state.number + (action.payload ? action.payload : 1),
        };
        case 'decrement': return {
            number: state.number - (action.payload ? action.payload : 1),
        };

        case 'decrement': return {
            number: state.number - 1
        };
        default: return state;
    }
}


export class StateAction implements Action {

    constructor(public type: string, public payload?: any) { }
}
