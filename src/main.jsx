import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import PersistReducer from "./Context/reducers/MainReducer";
import { createStore } from 'redux'


const Store = createStore(
  PersistReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

let persistor = persistStore(Store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)

