import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }
  addItem(item: User) {
    this.usersCollection.add(item);
  }

}
