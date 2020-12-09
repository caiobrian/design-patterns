import { DatabaseIFFE } from './db/database-iffe'

const database = DatabaseIFFE
database.addUser({ name: 'Caio', age: 28 })
database.addUser({ name: 'Marisa', age: 24 })
database.addUser({ name: 'Lalau', age: 100 })

export { database }
