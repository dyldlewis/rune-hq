import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model'
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.css'],
  providers: [ProfileService]
})
export class CatelogComponent implements OnInit {
  constructor(private router: Router, private profileService: ProfileService) { }

  profiles: Profile[];


  goToDetailPage(clickedProfile: Profile) {
    this.router.navigate(['profiles', clickedProfile.id]);
  };

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
  }

}
