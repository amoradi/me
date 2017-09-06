import "babel-polyfill";
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import defaultTheme from './themes';
import reducers from './reducers';
import Routes from './routes';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(ReduxThunk)
));

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={defaultTheme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
