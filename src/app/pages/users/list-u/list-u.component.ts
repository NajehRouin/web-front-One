import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AddUComponent } from '../add-u/add-u.component';



@Component({
  selector: 'app-list-u',
  templateUrl: './list-u.component.html',
  styleUrls: ['./list-u.component.scss']
})
export class ListUComponent implements OnInit {
  displayedColumns: string[] = ['profileImg', 'nom', 'email', 'type_Entreprise','action'];
  dataSource:User[] = [];
  users:User[]=[]
  constructor(public dialog: MatDialog,private serviceUser:UserService) { }

  ngOnInit(): void {
    this.serviceUser.getAllU().subscribe((result:any)=>{
    this.users=result.users
    this.dataSource=this.users
    })
  }

  
  openDialog(data: any, action: string, index: any) {
    const dialogRef = this.dialog.open(AddUComponent, {
      data: {
        action: action,
        data: data
      }
    });
    if (action == "new") {
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource.push(result.data)
      });
    } else if (action == "update") {
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource[index] = result.data
      });
    }
  }

  delete(id: any, index: any) {
    this.serviceUser.deleteU(id).subscribe(result => {
      if (result) {
        this.dataSource.splice(index, 1)
      }
    })
  }
}
