import { DatabaseIFFE } from './db/database-iffe'
import { database as moduleDatabaseA } from './module_a'

const database = DatabaseIFFE
database.addUser({ name: 'Luna', age: 8 })
database.addUser({ name: 'Nami', age: 6 })
database.addUser({ name: 'José', age: 25 })
database.showUser()

console.log(database === moduleDatabaseA)
