import { CustomAction } from './store';
import { INCEMENT, DECEMENT } from './actions/counter.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const initState = {
    number: 0
};

export interface Counter {
    number: number;
}

export function counterReducer(state: Counter = initState, action: CustomAction) {

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

const counterFS = createFeatureSelector<Counter>('counter');
export const numberSelector = createSelector(counterFS, state => state.number);
