import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
 private client_id = "87292ad08075f5f4f8af";
  private client_secret ="fd8558280d03d2121b3f203b51303345f31792c1";
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
