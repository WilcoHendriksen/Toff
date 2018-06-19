import { Component, OnInit, Inject }                        from '@angular/core';
import { ActivatedRoute, Router }                           from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { ClientService }                                    from '../_services/client.service'
import { Client }                                           from '../_models/client'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA }         from '@angular/material';
import { DialogyesnoComponent }                             from '../dialogyesno/dialogyesno.component';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})

export class ClientdetailComponent implements OnInit {
  //model for this form
  client: Client;
  clientForm: FormGroup;

  editMode: boolean = false;
  isDialogUp: boolean = false;
  isNewClient: boolean = false;

  proceedDeleting: boolean;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog ) {
    this.createClientForm();
  }

  ngOnInit() {
    // get id from route
    let id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.getClient(id);
    } else {
      this.isNewClient = true;
      this.client = new Client();
      this.enableForm();
    }
  }

  createClientForm() {
    this.clientForm = this.formBuilder.group({
      firstName: ['', Validators.required], prePosition: '', lastName: ['', Validators.required], city: '',
      street: '', streetNumber: '', phoneNumber: '', mobileNumber: '', firstAppointment: new Date(), birthday: new Date(),
      interval: '', allergy: '', diabetes: false, particularities: ''
    });
  }

  enableForm() {
    this.clientForm.enable();
    this.editMode = true;
  }

  disableForm() {
    this.clientForm.disable();
    this.editMode = false;
  }

  saveClient() {
    this.disableForm();
    if (this.clientForm.dirty) {

      this.client = this.prepareSaveClient();
      if (this.client.id > 0) {
        this.clientService.updateClient(this.client)
          .subscribe(client => {
            console.log(`client updated: ${client.lastName}`);
            this.router.navigate(['./clients']);
          });
      } else {
        this.clientService.createClient(this.client)
          .subscribe(client => {
            console.log(`client created: ${client.lastName}`);
            this.router.navigate(['./clients']);
          });
      }

    }
  }

  cancelEdit(): void {
    this.disableForm();

    if (this.clientForm.dirty) {
      this.setFormValues();
    }

    if(this.isNewClient) {
      this.router.navigate(['./clients']);
    }
  }

  deleteClient(): void {
    if (this.client.id > 0) {
      this.clientService.deleteClient(this.client.id)
        .subscribe(client => {
          console.log(`client deleted: ${client.lastName}`);
          this.router.navigate(['./clients']);
        });
    }
  }

  deleteConfirmationDialog(): void {
    this.isDialogUp = true;
    let dialogRef = this.dialog.open(DialogyesnoComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogUp = false;
      if (result) {
        this.deleteClient();
      }
    });
  }

  getClient(id: number): void {
    this.clientService.getClient(id)
      .subscribe(client => {

        // set model
        this.client = client;

        // set input values
        this.setFormValues();

        // disable form
        this.disableForm();
      });
  }

  setFormValues() {
    this.clientForm.setValue({
      firstName: this.client.firstName, prePosition: this.client.prePosition, lastName: this.client.lastName, city: this.client.city,
      street: this.client.street, streetNumber: this.client.streetNumber, phoneNumber: this.client.phoneNumber,
      mobileNumber: this.client.mobileNumber, firstAppointment: this.client.firstAppointment, birthday: this.client.birthday,
      interval: this.client.interval, allergy: this.client.allergy, diabetes: this.client.diabetes, particularities: this.client.particularities,
    });
  }

  prepareSaveClient(): Client {
    let formModel = this.clientForm.value;

    let saveClient: Client = {
      id: this.client.id, firstName: formModel.firstName, prePosition: formModel.prePosition, lastName: formModel.lastName,
      city: formModel.city, street: formModel.street, streetNumber: formModel.streetNumber, phoneNumber: formModel.phoneNumber,
      mobileNumber: formModel.mobileNumber, firstAppointment: formModel.firstAppointment, birthday: formModel.birthday,
      interval: formModel.interval, allergy: formModel.allergy, diabetes: formModel.diabetes, particularities: formModel.particularities
    };

    return saveClient;
  }

}
