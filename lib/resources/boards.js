import request from '../request'
import routes from '../routes'
import { curry } from 'ramda'

const all = curry((credentials, data = {}) => 
  request.get(credentials, routes.boards.base, data)
)

export default {
  all
}
