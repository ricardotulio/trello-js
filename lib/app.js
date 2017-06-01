import client from './client'
import { 
  __, 
  curry,
  equals,
  filter,
} from 'ramda'

const credentials = {
  key: process.env.TRELLO_APP_KEY,
  token: process.env.TRELLO_USER_TOKEN,
}

const hasName = curry((board, name) => {
  return equals(board.name, name)
})

const name = 'Plataformas'

client.connect(credentials)
  .then(client => client.boards.all())
  .then(boards => filter(hasName(__, name), boards))
  .then(boards => console.log(boards))
