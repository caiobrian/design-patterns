import { User } from '../interfaces/user'

const users: User[] = []

export const DatabaseModule = {
  addUser(user: User): void {
    users.push(user)
  },

  removeUser(index: number): void {
    users.splice(index, 1)
  },

  showUser(): void {
    for (const user of users) {
      console.log(user)
    }
  },
}
