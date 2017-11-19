import {
  equals,
  map,
  ifElse,
  merge,
  type,
} from 'ramda'
import resources from './resources'

const isFunction = x => equals(type(x), 'Function')

const bindCredentials = (credentials) => {
  const bind = func => func.bind(null, credentials)

  const bindRecursive = ifElse(
    isFunction,
    bind,
    resource => map(bindRecursive, resource),
  )

  const boundClient = map(bindRecursive, resources)
  return merge(boundClient, { credentials })
}

const connect = credentials => new Promise((resolve) => {
  const client = bindCredentials(credentials)
  resolve(client)
})

const client = merge({ connect }, resources)

export default client
