import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {store} from './Feature/Store.js'
import  {productsFetch} from './Feature/PrductSlice.js'
import {getTotals} from './Feature/CartSlice.js'

store.dispatch(productsFetch());
store.dispatch(getTotals());


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
