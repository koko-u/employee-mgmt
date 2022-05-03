import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging.component';
import { LogMessageComponent } from './log-message/log-message.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoggingComponent,
    LogMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoggingComponent
  ]
})
export class LoggingModule { }
