# Trello.js

Super cool library for trello

## How to use

First, install it:

```js
npm install trellojs
```

## Import

Import like usual: 

```js
import trello from 'trellojs'
```

also works using `require`:

```
const trello = require('trellojs')
```

## Using `connect`

```js
import trello from 'trellojs'

trello.connect({ key: 'TRELLO_APP_KEY', token: 'TRELLO_USER_TOKEN' })
  .then(client => client.boards.all())
```

# Building

To build the library, use `npm run build`. The build is produced in `dist` directory.

# License

The General Public License 3.0 License (GPL)
