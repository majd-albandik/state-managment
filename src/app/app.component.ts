import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { StoreInterface, StateAction, } from './store/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    count: number;

    constructor(private store: Store<StoreInterface>) {

        this.store.subscribe((date: StoreInterface) => {
            this.count = date.counter.number;
        });
    }

    increase() {
        this.store.dispatch(
            new StateAction('increment')
        );
    }

    decrease() {
        this.store.dispatch(
            new StateAction('decrement')
        );
    }

    increaseWith(num: number) {
        this.store.dispatch(
            new StateAction('increment', num)
        );
    }
}
