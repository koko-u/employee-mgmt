import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { employees } from '../data/mock-employees';
import { IEmployee } from '../models/employee';
import { LoggingService } from '../shared/logging.service';

@Injectable()
export class EmployeesService {

  constructor(private loggingService: LoggingService) { }

  getEmployees(): Observable<IEmployee[]> {
    this.loggingService.add('EmployeesService#getEmployees - get all employees.')
    return of(employees)
  }
}
