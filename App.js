import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { MainNavigation } from './router'
import Decks from './screens/Decks'
import rootReducer from './rootReducer'
import logger from 'redux-logger'


const store = createStore(rootReducer, compose(
  applyMiddleware(logger)
))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}
