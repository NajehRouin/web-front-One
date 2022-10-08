import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import {
  Domaine
} from 'src/app/models/domaine.model';
import { Type } from 'src/app/models/type.model';
import {
  DomaineService
} from 'src/app/services/domaine.service';
import {
  TypeService
} from 'src/app/services/type.service';
import {
  AddTypeComponent
} from '../add-type/add-type.component';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'nom','action'];
  dataSource:Type[] = []
  domaines: Domaine[] = []
  @ViewChild(MatTable) table!: MatTable<Domaine[]>;
  constructor(public dialog: MatDialog, private service: TypeService, private serviceD: DomaineService) {}

  ngOnInit(): void {
    
    this.service.getAllT().subscribe(result => {
      this.dataSource = result.types
    })
  }


  
  openDialog(data:any,action:string,index:any) {
    const dialogRef = this.dialog.open(AddTypeComponent,{
      data:{action:action,data:data}
    });
    if(action=="new"){
      dialogRef.afterClosed().subscribe(result => {
        if(result){
        this.dataSource.push(result)
        this.table.renderRows();
        }
      });
    }else if (action=="update"){
      dialogRef.afterClosed().subscribe(result => {
        if(result){
        this.dataSource[index]=result
        this.table.renderRows();
        }
      });
    }  
  }

  delete(id:any,index:any){
    this.service.deleteT(id).subscribe(result=>{
        this.dataSource.splice(index,1)
        this.table.renderRows(); 
    })
  }


}
