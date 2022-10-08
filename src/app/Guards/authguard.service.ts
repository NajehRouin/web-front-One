import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {  Observable } from 'rxjs';
import { User } from '../models/user.model';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
user!:User;
  constructor(private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   let token=sessionStorage.getItem('token')
   let helper=new JwtHelperService()
   this.user=helper.decodeToken(token||"")
    console.log(this.user)
    if(this.user.role && route.data['roles'].find((element:string)=>element===this.user.role) ){
      return true;
    }else{
      this.route.navigateByUrl("login")
      return false
    }
  }
}
