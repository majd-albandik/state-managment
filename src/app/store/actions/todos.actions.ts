
export const SUCCESS = '[todos] success';
export const FAIL = '[todos] fail';
export const LOAD = '[todos] load';

export class SuccessTodos {
    type = SUCCESS;
    constructor(public payload: any) { }
}

export class FailTodos {
    type = FAIL;
    constructor(public payload: any) { }
}


export class LoadTodos {
    type = LOAD;
}
