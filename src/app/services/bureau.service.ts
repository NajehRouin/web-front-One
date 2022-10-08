import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BureauService {
  baseUrl="http://localhost:4000/"
  constructor(private http:HttpClient) { }

  getAllB():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  addB(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,data)
  }

  updateB(data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+"/"+data._id,data)
  }

  deleteB(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"/"+id)
  }
}
