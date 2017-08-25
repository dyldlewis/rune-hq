import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.css']
})
export class CatelogComponent implements OnInit {
  constructor(private router: Router) { }

  profiles: Profile[] = [
    new Profile("JohnTheGod", 122, 150, "http://cdn.runescape.com/assets/img/external/oldschool/2016/dev-blogs/tma/september/tma_sep16_pyromancer.png", 1),
    new Profile("BillyDonovan", 120, 200, "https://vignette2.wikia.nocookie.net/2007scape/images/3/3a/Vannaka.png/revision/latest?cb=20150905010845", 2),
    new Profile("Zezima", 126, 500, "https://vignette4.wikia.nocookie.net/2007scape/images/2/25/Dharok%27s_armour_equipped.png/revision/latest?cb=20160205064915", 3)
  ]

  goToDetailPage(clickedProfile: Profile) {
    this.router.navigate(['profiles', clickedProfile.id]);
  };

  ngOnInit() {
  }

}
