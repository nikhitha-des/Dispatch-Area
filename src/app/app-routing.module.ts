import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDispatchAreaComponent } from './create-dispatch-area/create-dispatch-area.component';
import { AddDivisionComponent } from './add-division/add-division.component';

const routes: Routes = [
  {
    path : "createDispatchArea",component : CreateDispatchAreaComponent
  },
  {
    path : "addDivision", component : AddDivisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
