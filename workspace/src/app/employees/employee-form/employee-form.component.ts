import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormControl } from '@ngneat/reactive-forms';
import { Subscription } from 'rxjs';
import { Employee } from '../../models/employee'

@Component({
  selector: 'em-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnChanges, OnInit, OnDestroy {

  @Input()
  employee: Employee | undefined

  name = new FormControl<string>('')

  private nameSubscription_: Subscription | undefined

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.employee) {
      this.name.setValue(this.employee.name)
    }
  }

  ngOnInit(): void {
    this.nameSubscription_ = this.name.value$.subscribe(value => {
      if (this.employee) {
        this.employee.name = value
      }
    })
  }

  ngOnDestroy(): void {
    if (this.nameSubscription_) {
      this.nameSubscription_.unsubscribe()
    }
  }

}
