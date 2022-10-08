import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Domaine } from 'src/app/models/domaine.model';
import { DomaineService } from 'src/app/services/domaine.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {
selected: FormControl
items:any[]=[]
domaines:Domaine[]=[]
domainesA:any[]=[]
formType!:FormGroup
  constructor(private builder:FormBuilder,public dialogRef: MatDialogRef<AddTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:TypeService,
    private serviceD:DomaineService) { 
    this.selected=new FormControl()
  }

  ngOnInit(): void {
    this.serviceD.getAllD().subscribe(result => {
      this.domaines = result.domaines
    })
    
    if(this.data.action=="new"){
      this.formType=this.builder.group({
        nom:new FormControl('')
      })
    }else{
      this.formType=this.builder.group({
        nom:new FormControl(this.data.data.nom)
      })
      this.items=this.data.data.domaines
      console.log(this.items)
    }
    this.selected.valueChanges.subscribe(value=>{
      console.log(value)
      var item=this.domaines.find(element=>
        element._id==value
      )
      var exist =this.items.find(element=>element._id==item?._id)
      console.log(item,exist)
      if(item && !exist){
        this.items.push(item)
        this.domainesA.push(item._id)
      }
    })
   
  }

  addType(){
    let nom= this.formType.getRawValue()
    let type={
     nom:nom.nom,
     domaines:this.domainesA
    }
    console.log(type)
    if(this.data.action=="new"){
     this.service.addT(type).subscribe(result=>{
       this.dialogRef.close(result.types)
      })
    }else{
     this.service.updateT(type,this.data.data._id).subscribe(result=>{
       this.dialogRef.close(result.types)
      })
    }
    
   }
   
  close(){
   this.dialogRef.close()
  }
  
  deleteDomaine(index:any){
    this.items.splice(index,1)
  }

}
