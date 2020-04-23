import { autoinject } from 'aurelia-framework'
import { Auth } from 'services/auth';
import { Firestore } from 'services/firestore';

export interface Task {
  name: string
}

@autoinject
export class App {
  public message: string = 'Hello World!';

  tasks: Task[] = [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
  ]

  constructor (private auth: Auth, private store: Firestore) { }

  save() {
    this.store.save(this.tasks)
  }
}
