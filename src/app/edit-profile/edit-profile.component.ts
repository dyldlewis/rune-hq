import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [ProfileService]
})
export class EditProfileComponent implements OnInit {
  @Input() selectedProfile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  beginUpdatingProfile(profileToUpdate){
  this.profileService.updateProfile(profileToUpdate);
}

beginDeletingProfile(profileToDelete){
  if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.profileService.deleteProfile(profileToDelete);
  }
}
}
