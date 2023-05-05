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
import { NonRelatedComponent } from './interComponent/non-related/non-related.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { InterComponent } from './interComponent/inter.component';
import { TypescriptComponent } from './typescript/typescript/typescript.component';


const routes: Routes = [ 

  {path: 'bindings', component: BindingExamplesComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'xcross', component: ParentComponent},
  {path: 'form', component: AngularFormsComponent},
  {path: 'inter', component: NonRelatedComponent},
  {path: 'interx', component: InterComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: 'typescript', component: TypescriptComponent},
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
    InterComponent,
    NonRelatedComponent,
    ReactiveComponent,
    TypescriptComponent
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
