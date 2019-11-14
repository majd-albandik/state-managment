import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface, IncrementAction, DecrementAction, } from './store/store';

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
            new IncrementAction(1)
        );
    }

    decrease() {
        this.store.dispatch(
            new DecrementAction(1)
        );
    }
}
