import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Observable, map } from 'rxjs';
import { Employee } from '../models/employee'
import { LoggingService } from '../shared/logging.service';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  employees$: Observable<Employee[]> = EMPTY
  selectedEmployee: Employee | undefined

  constructor(private employeesService: EmployeesService,
              private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.employees$ =
      this.employeesService.getEmployees().pipe(
        map(arr => arr.map(obj => new Employee(obj)))
      )
  }

  onSelect(employee: Employee) {
    this.loggingService.add(`EmployeesComponent#onSelect - selected the employee: ${employee.toString()}`)
    this.selectedEmployee = employee
  }

}
