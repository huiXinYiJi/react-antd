import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import IRouter from './router'
// import Admin from './Admin';
// import IRouter from '@/pages/route_demo/router2/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
    <IRouter />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
