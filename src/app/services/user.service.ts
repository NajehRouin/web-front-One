import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:4000/"
  constructor(private http:HttpClient) { }

  
  getAllU():Observable<any>{
    return this.http.get<any>(this.baseUrl+"user/all")
  }

  addU(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"user/new",data)
  }

  updateU(data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+"user/update/"+data._id,data)
  }

  deleteU(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"user/delete/"+id)
  }
}
