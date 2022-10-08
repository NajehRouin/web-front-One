import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl="http://localhost:4000/login"
  user!:BehaviorSubject<any>
  constructor(private http:HttpClient) { 
    this.user=new BehaviorSubject({})
  }

  connect(user:any){
   return this.http.post(this.baseUrl,user).pipe(map((element:any)=>{
    sessionStorage.setItem('token',element.token)
    let helper=new JwtHelperService()
    this.user.next(helper.decodeToken(element.token||""))
   }))
  }
  logout(){
    sessionStorage.removeItem('token')
    this.user.unsubscribe()
  }

  get currentUser(){
    return this.user
  }

}
