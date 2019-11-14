import { CustomAction } from './store';
import { INCEMENT, DECEMENT } from './actions/counter.actions';


const initState = {
    number: 0
};

export interface Counter {
    number: number;
}
export function counterReducer(state = initState, action: CustomAction) {

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
