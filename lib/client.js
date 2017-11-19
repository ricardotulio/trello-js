import {
  curry,
  equals,
  map,
  ifElse,
  merge,
  type,
  __,
} from 'ramda'
import resources from './resources'

export const isFunction = x => equals(type(x), 'Function')

export const applyCredentials = (credentials, resources) => {
  const apply = func => func(credentials)

  const applyRecursive = ifElse(
    isFunction,
    apply,
    resource => map(applyRecursive, resource),
  )

  const appliedClient = map(applyRecursive, resources)
  return merge(appliedClient, { credentials })
}

export const connect = curry((credentials, resources) => new Promise((resolve) => {
  const client = applyCredentials(credentials, resources)
  resolve(client)
}))

export const client = merge({ connect: connect(__, resources) }, resources)

export default client
