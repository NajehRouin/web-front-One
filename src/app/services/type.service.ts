import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  baseUrl="http://localhost:4000/"
  constructor(private http:HttpClient) { }

  
  getAllT():Observable<any>{
    return this.http.get<any>(this.baseUrl+"domaine-type/type/all")
  }

  addT(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"domaine-type/type/new",data)
  }

  updateT(data:any,id:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+"domaine-type/type/update/"+id,data)
  }

  deleteT(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"domaine-type/type/"+id)
  }
}
