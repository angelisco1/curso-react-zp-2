import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getStore } from './store/config-store';

// const store = getStore()

ReactDOM.render((
    <Provider store={getStore()}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
    </Provider>
), document.getElementById('root'))