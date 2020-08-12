import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }

  create_Newcommentaire(Record)
  {
    return this.fireservices.collection('Commentaire').add(Record);
  }
  get_Allcommentaire()
  {
    return this.fireservices.collection('Commentaire').snapshotChanges();
  }
}
