import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  messages: string[] = [];
  
  // add a single message
  add(message: string) {
    this.messages.push(message);
  }

  // clears all messages
  clear() {
    this.messages = [];
  }

}
