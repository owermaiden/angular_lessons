import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './crossComponent/parent/parent.component';
import { ChildComponent } from './crossComponent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingExamplesComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
