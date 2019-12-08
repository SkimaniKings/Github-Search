import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private client_id = "9bdef01a58b5e07b";
  private client_secret = " d264742209386e9ad719ea7cd8eb1b4660e09fcb";

  constructor(private http:HttpClient) { 
    this.username = "skimanikings";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
}
