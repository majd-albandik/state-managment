import { SUCCESS, FAIL } from './actions/todos.actions';
import { CustomAction } from './store';


export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export function todosReducer(state: Todo[], action: CustomAction) {
    switch (action.type) {
        case SUCCESS:
            return action.payload;

        case FAIL: {
            console.log('error', action.payload);
            return state
        }
    }
}
