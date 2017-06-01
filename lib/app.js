import client from './client'
import { 
  __,
  curry,
  equals,
  filter, 
  find,
  map,
  pick,
  propEq,
} from 'ramda'

const credentials = {
  key: process.env.TRELLO_APP_KEY,
  token: process.env.TRELLO_USER_TOKEN,
}

const name = 'Plataformas'

client.connect(credentials)
  .then(client => client.boards.all())
  .then(boards => find(propEq('name', 'Plataformas'))(boards))
  .then(board => 
    pick(
      [
        'id', 
        'name', 
        'desc'
      ]
    , board)
  )
  .then(board => console.log(board))
