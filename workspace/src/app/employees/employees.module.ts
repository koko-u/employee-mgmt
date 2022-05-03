import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { EmployeesComponent } from './employees.component'
import { EmployeeRowComponent } from './employee-row/employee-row.component'
import { EmployeeFormComponent } from './employee-form/employee-form.component'

import { EmployeesService } from './employees.service'
import { SharedModule } from '../shared/shared.module'
import { EmployeesRoutingModule } from './employees-routing.module'

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeRowComponent,
    EmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeesRoutingModule,
  ],
  exports: [EmployeesComponent],
  providers: [EmployeesService],
})
export class EmployeesModule {}
