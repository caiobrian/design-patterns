import { User } from '../interfaces/user'

export class Database {
  private static _instance: Database | null = null
  private users: User[] = []

  private constructor() {}

  static get instance(): Database {
    if (Database._instance === null) {
      Database._instance = new Database()
    }

    return Database._instance
  }

  addUser(user: User): void {
    this.users.push(user)
  }

  removeUser(index: number): void {
    this.users.splice(index, 1)
  }

  showUser(): void {
    for (const user of this.users) {
      console.log(user)
    }
  }
}
