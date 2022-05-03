import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private messagesSubject = new BehaviorSubject<Message[]>([])

  get messages$(): Observable<Message[]> {
    return this.messagesSubject.asObservable()
  }

  constructor() {}

  add(message: string): void {
    const messages = this.messagesSubject.value
    this.messagesSubject.next([
      ...messages,
      new Message(message)
    ])
  }

  clear(): void {
    this.messagesSubject.next([]);
  }
}
