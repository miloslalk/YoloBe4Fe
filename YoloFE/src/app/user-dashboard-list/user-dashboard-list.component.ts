import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-user-dashboard-list",
  templateUrl: "./user-dashboard-list.component.html",
  styleUrls: ["./user-dashboard-list.component.css"]
})
export class UserDashboardListComponent implements OnInit {
  ngOnInit() {}
  links = ["Section-1", "Section-2", "Section-3"];
  constructor(public dialog: MatDialog) {}
  animal: string;
  name: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: "hello"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  section = 0;
  ShowSection(e) {
    this.section = e;
  }
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html",
  styleUrls: ["./user-dashboard-list.component.css"]
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
