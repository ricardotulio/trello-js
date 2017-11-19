import { buildOptions } from '../lib/request'

const path = '/card/'
const method = 'GET'
const data = { id: 1, name: 'teste' }

const expected = {
  method,
  uri: `https://api.trello.com/${path}`,
  qs: data,
  json: true,
}

test('if can build request options', () => {
  expect(buildOptions(path, method, data)).toEqual(expected)
})
