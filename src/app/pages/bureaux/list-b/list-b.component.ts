import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBComponent } from '../add-b/add-b.component';
export interface PeriodicElement {
  name: string;
  _id: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {_id: "1", name: 'Hydrogen'},
  {_id: "2", name: 'Helium'},
  {_id: "3", name: 'Lithium'},

];
@Component({
  selector: 'app-list-b',
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.scss']
})
export class ListBComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }
 

  ngOnInit(): void {
  }
  openDialog() {
    
    const dialogRef = this.dialog.open(AddBComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
