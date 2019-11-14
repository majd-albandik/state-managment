import { Counter, counterReducer } from './counter.reducer';


// the general state of the app  (for every reducer )
export interface StoreInterface {
    counter: Counter;
}


// interface to have actions with payloads
export interface CustomAction {
    type: string;
    payload: any;
}


// All reducers in the app
export const reducers = {
    counter: counterReducer,
};

