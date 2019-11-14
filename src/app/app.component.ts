import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface, } from './store/store';
import { IncrementAction, DecrementAction } from './store/actions/counter.actions';
import { numberSelector } from './store/counter.reducer';
import { LoadTodos } from './store/actions/todos.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    count: number;

    constructor(private store: Store<StoreInterface>) {

        this.store.select(numberSelector).subscribe((date) => {
            this.count = date;
        });

        this.store.subscribe((state) => {
            console.log(state);
        });
    }

    increase() {
        this.store.dispatch(
            new IncrementAction(1)
        );
    }

    decrease() {
        this.store.dispatch(
            new DecrementAction(1)
        );
    }

    callAPI() {
        this.store.dispatch(new LoadTodos());
    }
}
