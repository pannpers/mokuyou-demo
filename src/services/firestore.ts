import { autoinject } from 'aurelia-framework'
import { getLogger } from 'aurelia-logging'
import { FirebaseApp } from './firebase-app'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { Task } from 'app'

@autoinject
export class Firestore {

  private readonly logger = getLogger(Firestore.name)
  store: firebase.firestore.Firestore

  constructor (private app: FirebaseApp) {
    this.store = app.app.firestore()
  }

  save(tasks: Task[]) {
    const ref = this.store.collection('tasks')
    tasks.forEach(t => {
      ref.add(t)
    })
  }
}
