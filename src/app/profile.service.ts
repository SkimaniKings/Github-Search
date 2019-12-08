import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private client_id = " Iv1.9bdef01a58b5e07b";
  private client_secret = " a6c2b7d8f7c691e771b1908873e1322028e097c4";

  constructor(private http:HttpClient) { 
    this.username = "skimanikings";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}
