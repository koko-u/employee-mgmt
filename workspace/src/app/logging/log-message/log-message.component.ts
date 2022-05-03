import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'em-log-message',
  templateUrl: './log-message.component.html',
  styleUrls: ['./log-message.component.scss']
})
export class LogMessageComponent implements OnInit {

  @Input()
  message: Message | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
