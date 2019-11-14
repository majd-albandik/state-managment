import { Counter, counterReducer } from './counter.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { todosReducer, Todo } from './todos.reducer';


// the general state of the app  (for every reducer )
export interface StoreInterface {
    counter: Counter;
    todos: Todo[];
}


// interface to have actions with payloads
export interface CustomAction {
    type: string;
    payload: any;
}


// All reducers in the app
export const reducers: ActionReducerMap<StoreInterface> = {
    counter: counterReducer,
    todos: todosReducer
};

