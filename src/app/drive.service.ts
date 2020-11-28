import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private http:HttpClient) { }

  addData(user){
    return this.http.post("http://localhost:3000/user",user);
  }
  

  showData(){
    return this.http.get("http://localhost:3000/user");
  }

  delData(user){
    return this.http.delete("http://localhost:3000/user/"+user.id);
  }
}
