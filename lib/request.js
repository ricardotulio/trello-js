import requestPromise from 'request-promise'
import {
  curry,
} from 'ramda'

const buildOptions = (path, method, data) => ({
  method,
  uri: `https://api.trello.com/${path}`,
  qs: data,
  json: true,
})

const request = curry((method, path, data = {}) =>
  requestPromise(buildOptions(path, method, data)))

export default {
  get: request('GET'),
}
