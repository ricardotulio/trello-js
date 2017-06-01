# Super cool library for trello

```js
import client from './client'

const credentials = {
  key: process.env.TRELLO_APP_KEY,
  token: USER TOKEN HERE
}

client.connect(credenetials)
  .then(client => client.boards.all())
  .then(boards => console.log(boards))
```


