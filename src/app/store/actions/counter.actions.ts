import { Action } from '@ngrx/store';

export const INCEMENT = '[counter]  increment';
export const DECEMENT = '[counter]  decrement';


export class IncrementAction implements Action {
    type = INCEMENT;
    constructor(public payload: any) { }
}


export class DecrementAction implements Action {
    type = DECEMENT;
    constructor(public payload: any) { }
}

