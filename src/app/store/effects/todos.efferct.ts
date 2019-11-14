import { LOAD, SuccessTodos, FailTodos } from '../actions/todos.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodosEffect {

    todoEffect = createEffect(
        () => this.actions.pipe(
            ofType(LOAD),
            mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos')
                .pipe(
                    map((data) => new SuccessTodos(data)),
                    catchError((error) => of(new FailTodos(error)))
                ))
        )

    );

    constructor(private http: HttpClient, private actions: Actions) {

    }
}
