import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { TodosEffect } from './store/effects/todos.efferct';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([
            TodosEffect
        ]),
        HttpClientModule,
        StoreDevtoolsModule.instrument({
            maxAge: 10,

        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
