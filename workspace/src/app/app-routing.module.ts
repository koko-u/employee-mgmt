import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeesComponent } from './employees/employees.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    loadChildren: () => {
      return (
        import('./employees/employees.module')
            .then((m) => m.EmployeesModule)
      )
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
