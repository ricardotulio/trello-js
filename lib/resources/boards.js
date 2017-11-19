import {
  curry,
  merge,
} from 'ramda'
import request from '../request'
import routes from '../routes'

const all = curry((credentials, data = {}) =>
  request.get(routes.boards.base, merge(credentials, data)))

const lists = curry((credentials, data = {}) =>
  request.get(routes.boards.lists(data.id), merge(credentials, data)))

const cards = curry((credentials, data = {}) =>
  request.get(routes.boards.cards(data.id), merge(credentials, data)))

export default {
  all,
  lists,
  cards,
}
