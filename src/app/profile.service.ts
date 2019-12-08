import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private client_id = "9bdef01a58b5e07b";
  private client_secret = " d264742209386e9ad719ea7cd8eb1b4660e09fcb";

  constructor(private http:HttpClient) { }
}
