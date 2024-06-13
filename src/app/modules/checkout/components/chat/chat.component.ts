import { Component,OnInit } from '@angular/core';
import { SignalrService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})

export class ChatComponent implements OnInit {
  public messages: { type: string, content: string }[] = [];
  public newMessage: string = '';

  constructor(private signalrService: SignalrService) { }

  ngOnInit(): void {
    this.signalrService.startConnection();
    this.signalrService.addTransferChatMessageListener((message) => {
      this.messages.push({ type: 'received', content: message });
    });
  }

  public sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({ type: 'sent', content: this.newMessage });
      this.signalrService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
