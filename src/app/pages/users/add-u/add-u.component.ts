import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Domaine } from 'src/app/models/domaine.model';
import { Type } from 'src/app/models/type.model';
import { User } from 'src/app/models/user.model';
import { TypeService } from 'src/app/services/type.service';
import { UserService } from 'src/app/services/user.service';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-add-u',
  templateUrl: './add-u.component.html',
  styleUrls: ['./add-u.component.scss']
})
export class AddUComponent implements OnInit {
  
  selectedType:FormControl=new FormControl()
  selectedDomaine:FormControl=new FormControl()
  userForm !:FormGroup
  types:Type[]=[]
  type:Type=new Type({})
  domaines:Domaine[]=[]
  file:any
  constructor(private _formBuilder: FormBuilder,private serviceType:TypeService,private serviceUser:UserService,
    public dialogRef: MatDialogRef<AddUComponent>,
    @Inject(MAT_DIALOG_DATA) public data_dialog: any,) { }

  ngOnInit(): void {
    this.serviceType.getAllT().subscribe(result=>{
      this.types=result.types
    })
    this.selectedType.valueChanges.subscribe(value=>{
      this.type = this.types.find(element=>value==element._id)||new Type({})
      console.log(this.type)
      this.domaines=this.type.domaines
    })
    if(this.data_dialog.action=="new"){
      this.initForm(new User({}))
    }else if(this.data_dialog.action=="update"){
      this.initForm(this.data_dialog.data)
    }
    
  }


  initForm(user:any){
    this.userForm=this._formBuilder.group({
      nom: [user.nom, Validators.required],
      email: [user.email, Validators.required],
      password: [user.password, Validators.required],
      numeroTel: [user.numeroTel, Validators.required],
      adresse: [user.adresse, Validators.required],
      start: new FormControl(new Date(year, month)),
      end: new FormControl(new Date(year, month)),
      methode:new FormControl(user.methode)
      
    })
  }

  addUser(){ 
    let data=this.userForm.getRawValue()
    let formData = new FormData();
    let user={
      nom:data.nom,
      email:data.email,
      password:data.password,
      numeroTel:data.numeroTel,
      adresse:data.adresse,
      methode:data.methode,
      startPeriode:data.start,
      endPeriode:data.end,
      score:0,
      remise:0,
      nbTransaction:0,
      statut:true,
      rating:0,
      domaine:this.selectedDomaine.value,
      type_Entreprise:this.selectedType.value
    }
    formData.append("user",JSON.stringify(user))   
    formData.append('image',this.file)
    console.log(formData.getAll('image'))
if(this.data_dialog.action=="new"){
  this.serviceUser.addU(formData).subscribe((result:any)=>{
    this.dialogRef.close(result.users)
    })
}else if(this.data_dialog.action=="update"){
  this.serviceUser.updateU(formData).subscribe((result:any)=>{
    this.dialogRef.close(result.users)
    })
}
  }
  getImageProfile(event:any){
    this.file=event.target.files[0]
  
  }
  close(){
    this.dialogRef.close()
  }
}
