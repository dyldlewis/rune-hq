import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  providers: [ProfileService]
})
export class ProfileDetailComponent implements OnInit {
  profileId: string;
  profileToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.profileId = urlParameters['id'];
    });
    this.profileToDisplay = this.profileService.getProfileById(this.profileId);
  }

}
