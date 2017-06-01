import https from 'https'
import { curry } from 'ramda'

const buildRequestOptions = (path, method, credentials) => {
  return {
    hostname: 'api.trello.com',
    port: 443,
    path: `${path}?key=${credentials.key}&token=${credentials.token}`,
    method,
  }
}

const getResponseContent = response => {
  return new Promise((resolve, reject) => {
    let rawBody = ''

    response.setEncoding('utf8')
    response.on('data', data => {
      rawBody += data
    })

    response.on('end', chunk => {
      try {
        const content = JSON.parse(rawBody)
        resolve(content)
      } catch (exception) {
        reject(exception)
      }
    })
  })
}

const request = curry((method, credentials, path, data) => {
  return new Promise((resolve, reject) => {
    const options = buildRequestOptions(path, method, credentials)

    const request = https.request(options, response => {
      getResponseContent(response)
        .then(content => resolve(content))
        .catch(exception => reject(exception))
    })
    
    request.on('error', error => {
      reject(error)
    })

    request.end()
  })
})

export default {
  get: request('GET')
}
