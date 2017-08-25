import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  providers: [ProfileService]
})
export class ProfileDetailComponent implements OnInit {
  profileId: number = null;
  profileToDisplay: Profile;

  constructor(private route: ActivatedRoute, private location: Location, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.profileId = parseInt(urlParameters['id']);
    });
    this.profileToDisplay = this.profileService.getProfileById(this.profileId);
  }

}
