import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';

import { AppComponent } from './app.component';
import { MaterializedShoppingListComponent } from './components/materialized-shopping-list/materialized-shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterializedShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
