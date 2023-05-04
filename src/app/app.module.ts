import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './crossComponent/parent/parent.component';
import { ChildComponent } from './crossComponent/child/child.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingExamplesComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    AngularFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
