import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomSocketService {

  constructor(private socket: Socket) { }

  public getPrices$(): Observable<any> {
    return new Observable(observer => {
      try {

        this.socket.on('connect', () => { //TODO Nativo!
          console.log('Conectado!');
        })

        this.socket.on('push', (data: any) => { //TODO Nuestro evento!!
          console.log('Llego la data! :)');
          observer.next(data)

        })

        this.socket.on('disconnect', () => { //TODO Nativo!
          observer.complete()
        })

        this.socket.on('error', (e: any) => { //TODO Nativo!
          observer.error(e)
        })


        this.socket.on('connect_error', (e: any) => { //TODO Nativo!
          observer.error(e)
        })


      } catch (e) {
        observer.error(e);
      }
    })
  }
}
