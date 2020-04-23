import { autoinject } from 'aurelia-framework'
import { getLogger } from 'aurelia-logging'
import { FirebaseApp } from './firebase-app'
import * as firebase from 'firebase/app'
import 'firebase/auth'

@autoinject
export class Auth {

  private readonly logger = getLogger(Auth.name)
  auth: firebase.auth.Auth
  provider = new firebase.auth.GoogleAuthProvider

  constructor (private app: FirebaseApp) {
    this.auth = app.app.auth()
  }

  signIn() {
    this.auth.signInWithPopup(this.provider)
  }

  get isSignedIn(): boolean {
    return this.auth.currentUser !== null
  }

  get name(): string {
    return this.auth.currentUser?.displayName
  }
}
