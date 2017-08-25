import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model'
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.css'],
  providers: [ProfileService]
})
export class CatelogComponent implements OnInit {
  currentRoute: string = this.router.url;
  profiles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private profileService: ProfileService) { }

  goToDetailPage(clickedProfile) {
    this.router.navigate(['profiles', clickedProfile.$key]);
  };

  ngOnInit() {
    this.profiles = this.profileService.getProfiles();
  }

}
