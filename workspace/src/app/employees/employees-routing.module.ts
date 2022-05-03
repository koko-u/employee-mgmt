import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeesComponent } from "./employees.component";

const routes: Routes = [
  { path: '', component: EmployeesComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: []
})
export class EmployeesRoutingModule {}
