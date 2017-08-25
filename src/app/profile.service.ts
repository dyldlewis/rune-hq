import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfileService {
    profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles');
  }

  getProfiles() {
    return this.profiles;
  }

  addProfile(newProfile: Profile) {
  this.profiles.push(newProfile);
}

  getProfileById(profileId: string){
    return this.database.object('profiles/' + profileId);
  }

  updateProfile(localUpdatedProfile){
    var profileEntryInFirebase = this.getProfileById(localUpdatedProfile.$key);
    profileEntryInFirebase.update({name: localUpdatedProfile.name,
                                level: localUpdatedProfile.level,
                                netWorth: localUpdatedProfile.netWorth,
                              profilePicutre: localUpdatedProfile.profilePicture});
  }

  deleteProfile(localProfileToDelete){
    var profileEntryInFirebase = this.getProfileById(localProfileToDelete.$key);
    profileEntryInFirebase.remove();
  }
}
