import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Domaine } from 'src/app/models/domaine.model';
import { DomaineService } from 'src/app/services/domaine.service';

@Component({
  selector: 'app-add-domaine',
  templateUrl: './add-domaine.component.html',
  styleUrls: ['./add-domaine.component.scss']
})
export class AddDomaineComponent implements OnInit {
formDomaine!:FormGroup
newDomaine:Domaine=new Domaine({_id:"",nom:""})
  constructor(private builder:FormBuilder,private service:DomaineService,
    public dialogRef: MatDialogRef<AddDomaineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.action=="new"){
      this.formDomaine=this.builder.group({
        nom:new FormControl('')
      })
    }else{
      this.formDomaine=this.builder.group({
        nom:new FormControl(this.data.data.nom)
      })
    }
    
  }
  addDomaine(){
    let dataF=this.formDomaine.getRawValue()
    if(this.data.action=="new"){
      this.service.addD(dataF).subscribe(result=>{
        console.log(result)
      if (result) this.dialogRef.close(result.domaines)
      })
    }else{
      this.service.updateD(dataF,this.data.data._id).subscribe(result=>{
        console.log(result)
      if (result) this.dialogRef.close(result.domaines)
      })
    }
    
  }

  close(){
    this.dialogRef.close()
  }

}
