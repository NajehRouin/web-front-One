import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  user!:any
  constructor(private form:FormBuilder,private route:Router,private auth:AuthService) {
    this.loginForm=this.form.group({
      username:new FormControl(''),
      password:new FormControl('')
    })
   }

  ngOnInit(): void {
    this.loginForm=this.form.group({
      username:new FormControl(''),
      password:new FormControl('')
    })
  }
  login(){
    this.user=this.loginForm.getRawValue()
    this.auth.connect(this.user).subscribe((data)=>{
      console.log(data)
      this.route.navigateByUrl("dashboard")
      })
  }

}
