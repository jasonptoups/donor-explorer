# Front end React with JWTs

This section is under development. I will document my process and include it here. I hope to have something written here by Friday, June 8.
<!-- 
## Set up react up
I started by creating a directory and CDing into that directory. In the terminal, run the following commands:
```bash
$ create-react-app donor-explorer
$ npm i redux
$ npm i react-redux
$ npm i history
$ npm i react-router-redux@next
$ npm i redux-persist
$ npm i redux-persist-transform-filter
$ npm i redux-api-middleware
$ npm i jwt-decode
$ npm i react-materialize
```

Start by setting up some of the file structure. In the ```src``` directory, I created ```styles```, ```reducers```, ```components```, ```constants```, and ```actions``` directories. I moved the ```.css``` files into ```styles``` and made sure to update their references at the top of the existing files (```index.js``` and ```app.js```). In ```reducers```, I created a file called ```index.js```. In that file:
```js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router: routerReducer
})
```
This will allow us to combine multiple reducers, which we may need in the future.  

In the ```src``` directory, create a ```store.js``` file. This code comes from that same tutorial I used on the back end, which you can find at: https://medium.com/@viewflow/full-stack-django-quick-start-with-jwt-auth-and-react-redux-part-ii-be9cf6942957
```js
import storage from 'redux-persist/es/storage'
import { apiMiddleware } from 'redux-api-middleware'
import { applyMiddleware, createStore } from 'redux'
import { createFilter } from 'redux-persist-transform-filter'
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers/index'

export default (history) => {
  const persistedFilter = createFilter(
    'auth', ['access', 'refresh'])
  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage,
      whitelist: ['auth'],
      transforms: [persistedFilter]
    },
    rootReducer)
  const store = createStore(
    reducer, {},
    applyMiddleware(
      apiMiddleware,
      routerMiddleware(history))
  )
  persistStore(store)
  return store
}
```

Next, we link up index.js to this store file:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import './styles/index.css'
import App from './components/App'
import configureStore from './store'

const history = createHistory()
const store = configureStore(history)

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
``` -->
