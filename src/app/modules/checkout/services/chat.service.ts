import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from '../../../../environments/environment';
import { AuthInterceptorService } from '../../../services/auth-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection!: signalR.HubConnection;
  private apiUrl = environment.apiUrl;
  
  constructor(private auth: AuthInterceptorService) { }
  token: string= this.auth.access_token;

  public startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(`${this.apiUrl}/chat`, {
      accessTokenFactory: () => this.token 
    })
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addTransferChatMessageListener(callback: (message: any) => void): void {
    this.hubConnection.on('ReceiveMessage', (message) => {
      callback(message);
    });
  }

  public sendMessage(message: string): void {
    this.hubConnection.invoke('SendMessage', message)
      .catch(err => console.error(err));
  }
}