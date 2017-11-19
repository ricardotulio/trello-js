import { length } from 'ramda'
import {
  applyCredentials,
  connect,
  isFunction,
} from '../lib/client'

const credentials = {
  api_key: 'xuplau',
}

const list = jest.fn()

const resources = {
  order: {
    list,
  },
}

test('if can verify if object is a function', () => {
  expect(isFunction({})).toBeFalsy()
  expect(isFunction(() => {})).toBeTruthy()
})

test('if client can apply credentials', () => {
  const applied = applyCredentials(credentials, resources)

  expect(length(list.mock.calls)).toBe(1)
  expect(list.mock.calls[0][0]).toEqual(credentials)
})
