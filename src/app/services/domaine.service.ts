import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  baseUrl="http://localhost:4000/"
  constructor(private http:HttpClient) { }


  
  getAllD():Observable<any>{
    return this.http.get<any>(this.baseUrl+"domaine-type/domaine/all")
  }

  addD(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"domaine-type/domaine/new",data)
  }

  updateD(data:any,id:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+"domaine-type/domaine/update/"+id,data)
  }

  deleteD(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"domaine-type/domaine/"+id)
  }
}
