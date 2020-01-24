import * as firebaseApp from 'firebase/app';
import 'firebase/database';

export class FirebaseService {

  private getDB(): firebase.database.Database {
    return firebaseApp.database();
  }

  public initFirebaseApp(config: any): void {
    firebaseApp.initializeApp(config);
  }

  public getUsersCollection(): firebase.database.Reference {
    return this.getDB().ref('users');
  }

}
