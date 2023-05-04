import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingExamplesComponent } from './binding-examples/binding-examples.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './crossComponent/parent/parent.component';
import { ChildComponent } from './crossComponent/child/child.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [ 

  {path: 'bindings', component: BindingExamplesComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'xcross', component: ParentComponent},
  {path: 'form', component: AngularFormsComponent},
  {path: '', pathMatch: 'full', component: BindingExamplesComponent}

]

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
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
