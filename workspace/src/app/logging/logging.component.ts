import { Component, OnInit } from '@angular/core'
import { EMPTY, map, share, Observable, shareReplay, tap } from 'rxjs'
import { Message } from '../models/message'
import { LoggingService } from '../shared/logging.service'

@Component({
  selector: 'em-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss'],
})
export class LoggingComponent implements OnInit {
  messages$: Observable<Message[]> = EMPTY
  anyMessages$: Observable<boolean> = EMPTY

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.messages$ = this.loggingService.messages$
    this.anyMessages$ = this.messages$.pipe(
      map((messages) => messages.length > 0)
    )
  }

  onClear(): void {
    this.loggingService.clear()
  }
}
