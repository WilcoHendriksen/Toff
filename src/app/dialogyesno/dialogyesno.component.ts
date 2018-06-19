import { Component, Inject }              from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA }  from '@angular/material';

@Component({
  selector: 'app-dialogyesno',
  templateUrl: './dialogyesno.component.html',
  styleUrls: ['./dialogyesno.component.css']
})
export class DialogyesnoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogyesnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dialogClose(): void {
    this.dialogRef.close(false);
  }

  dialogCloseProceed(): void {
    this.dialogRef.close(true);
  }

}

