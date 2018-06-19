import { Component, OnInit } from '@angular/core';
import { ClientService } from '../_services/client.service';
import { Client } from '../_models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  clients: Client[];

  ngOnInit() {
    this.getClients();
  }

  getClients() :void{
    this.clientService.getClients()
    .subscribe(
      (data) => 
      {
        this.clients = data;     
      },
      (error) =>
      {
        // handle a error
      }
    );
  };

}
