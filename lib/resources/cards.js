import {
  curry,
  merge,
} from 'ramda'
import request from '../request'
import routes from '../routes'

const find = curry((credentials, data = {}) =>
  request.get(routes.cards.find(data.id), merge(credentials, data)))

const actions = curry((credentials, data = {}) =>
  request.get(routes.cards.actions(data.id), merge(credentials, data)))

export default {
  find,
  actions,
}
