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
import { ServicesComponent } from './services/services.component';
import { NonRelatedComponent } from './services/non-related/non-related.component';


const routes: Routes = [ 

  {path: 'bindings', component: BindingExamplesComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'xcross', component: ParentComponent},
  {path: 'form', component: AngularFormsComponent},
  {path: 'services', component: NonRelatedComponent},
  {path: 'servicesx', component: ServicesComponent},
  {path: '', pathMatch: 'full', component: BindingExamplesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    BindingExamplesComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    AngularFormsComponent,
    ServicesComponent,
    NonRelatedComponent
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
