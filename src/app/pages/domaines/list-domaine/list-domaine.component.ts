import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Domaine } from 'src/app/models/domaine.model';
import { DomaineService } from 'src/app/services/domaine.service';
import { AddDomaineComponent } from '../add-domaine/add-domaine.component';



@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.scss']
})
export class ListDomaineComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'nom',"action"];
  dataSource:Domaine[] = [];
  @ViewChild(MatTable) table!: MatTable<Domaine[]>;
  constructor(public dialog: MatDialog,private service:DomaineService) { }

  ngOnInit(): void {
    this.service.getAllD().subscribe(result=>{
      this.dataSource=result.domaines
      this.table.renderRows();
    })
  }
 
  openDialog(data:any,action:string,index:any) {
    const dialogRef = this.dialog.open(AddDomaineComponent,{
      data:{action:action,data:data}
    });
    if(action=="new"){
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource.push(result)
        this.table.renderRows();
      });
    }else if (action=="update"){
      dialogRef.afterClosed().subscribe(result => {
        this.dataSource[index]=result
        this.table.renderRows();
      });
    }  
  }

  delete(id:any,index:any){
    this.service.deleteD(id).subscribe(result=>{
        this.dataSource.splice(index,1)
        this.table.renderRows(); 
    })
  }

}
