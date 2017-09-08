import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';

import './style/app.less'; // Import of less files. Webpack will run the associated loader and plug this into the page.


const store = configureStore();

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);
