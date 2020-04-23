import { Container } from 'aurelia-framework'
import * as firebase from 'firebase/app'
import * as environment from "../../config/environment.json";

export class FirebaseApp {

  static initFirebaseApp(c: Container) {
    const app = firebase.initializeApp(environment.firebaseConfig)
    c.registerInstance(FirebaseApp, new FirebaseApp(app))
  }
  constructor (public app: firebase.app.App) { }
}
