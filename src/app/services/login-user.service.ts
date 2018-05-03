import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {User} from '../interfaces/user';

@Injectable()
export class LoginUserService {

  userObs: Observable<firebase.User>;
  user:User;

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router) {

    console.log(afAuth.authState);
    this.userObs = afAuth.authState;

  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider().addScope('email,user_hometown,user_religion_politics,user_likes,user_status,user_about_me,user_location,user_tagged_places,user_birthday,user_photos,user_videos,user_education_history,user_posts,user_website,user_friends,user_relationship_details,user_work_history,user_games_activity,user_relationships,user_events,pages_show_list,user_actions.books,user_actions.music,user_actions.video,user_actions.fitness,user_actions.news')).then(
      res => { // Success
        this.saveUser();
        this.router.navigate(['/dashboard']);
      },
      msg => { // Error
        console.log(msg);
      }
    );
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => { // Success
        this.saveUser();
        this.router.navigate(['/dashboard']);
      },
      msg => { // Error
        console.log(msg);
      }
    );
  }

  loginWithEmail(event, email, password){
    event.preventDefault();
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((res) => {
      this.router.navigate(['/dashboard']);
    }).catch((error: any) => {
      if (error) {
        console.log(error);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(
      res => { // Success
        this.destroyProfile();
        this.router.navigate(['/']);
      },
      msg => { // Error
        console.log(msg);
      }
    );
  }

  saveUser(){
    this.userObs.subscribe
    (user=> {
      if (user) {
        this.user.displayName=user.displayName;
        this.user.email=user.email;
        this.user.photoUrl=user.photoUrl;
        this.user.password=user.password;
        console.log(this.user);
        this.userService.addItem(this.user);
      }
    });
  }

  getUserProfile(){
    this.userObs.subscribe
    (user=> {
      if (user) {
        console.log(user.toJSON());
        this.user=user;
      }
    });
  }

  destroyProfile(){
    this.user=null;
  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

}
