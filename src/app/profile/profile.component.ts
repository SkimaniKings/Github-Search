import { Component, OnInit } from '@angular/core';
import { ProfileService }from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

constructor(private profileService:ProfileService){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    this.profile = profile;
  });

  this.profileService.getProfileRepos().subscribe(repos => {
    this.repos = repos;
  });
}
 
findProfile(){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {
    this.profile = profile;
  });

  this.profileService.getProfileRepos().subscribe(repos => {
    this.repos = repos;
  })
}
  ngOnInit() {
    
    this.profileService.updateProfile('skimanikings');
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    this.profileService.getProfileRepos().subscribe(repos =>  this.repos = repos);
  }

}