import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model';
import { FirebaseDB } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _fireDatabase: AngularFirestore) { }

  getData(){
    return this._fireDatabase.collection(FirebaseDB.collection_name).snapshotChanges();
  }

  createUser(userDetail: User){
    return this._fireDatabase.collection(FirebaseDB.collection_name).add(userDetail);
  }

  updateUser(id, userDetail: User){
    return this._fireDatabase.doc(`${FirebaseDB.collection_name}/${id}`)
      .update(userDetail);
  }

  deleteUser(id){
    return this._fireDatabase.doc(`${FirebaseDB.collection_name}/${id}`).delete();
  }
}