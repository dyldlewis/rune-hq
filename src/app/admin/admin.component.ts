import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProfileService]
})
export class AdminComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  submitForm(name: string, level: number, netWorth: number, profilePicture: string) {
    var newProfile: Profile = new Profile(name, level, netWorth, profilePicture);
    this.profileService.addProfile(newProfile);
  }

  ngOnInit() {
  }

}
