import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { PROFILES } from './mock-profiles';

@Injectable()
export class ProfileService {

  constructor() { }

  getProfiles() {
    return PROFILES;
  }

  getProfileById(profileId: number){
  for (var i = 0; i <= PROFILES.length - 1; i++) {
    if (PROFILES[i].id === profileId) {
      return PROFILES[i];
    }
  }
}
}
