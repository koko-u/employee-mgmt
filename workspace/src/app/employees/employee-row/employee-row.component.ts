import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'em-employee-row',
  templateUrl: './employee-row.component.html',
  styleUrls: ['./employee-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeRowComponent implements OnInit {

  @Input()
  employee!: Employee

  constructor() { }

  ngOnInit(): void {
  }

}
