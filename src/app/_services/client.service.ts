import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs/Observable';
import { HttpClient }           from '@angular/common/http';
import { Client }               from '../_models/client';
import { LocalstorageService }  from '../_services/localstorage.service';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient, private localstorageService: LocalstorageService) { }

  // creates a new client
  // POST /api/client
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.localstorageService.GetItem("webservice") + "/api/client", client);
  }

  // gets client with id 1
  // GET /api/client/1
  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.localstorageService.GetItem("webservice") + `/api/client/${id}`);
  }

  // updates client with id 1
  // PUT /api/client/1
  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.localstorageService.GetItem("webservice") + `/api/client/${client.id}`, client);
  }

  // deletes client with id 1
  // DELETE /api/client/1
  deleteClient(id: Number): Observable<Client> {
    return this.http.delete<Client>(this.localstorageService.GetItem("webservice") + `/api/client/${id}`);
  }

  // gets all clients
  // GET /api/clients
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.localstorageService.GetItem("webservice") + "/api/clients");
  }
  
}
