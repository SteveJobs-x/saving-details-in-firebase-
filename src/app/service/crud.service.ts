import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireServices: AngularFirestore) { }

  create_Newemployee(Record: unknown){
    return this.fireServices.collection('Employee').add(Record);
  }
}
