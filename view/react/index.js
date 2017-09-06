import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app';
import Info from './components/info';
import NoteList from './containers/note_list';
import NoteShow from './containers/note_show';
import EditNote from './containers/note_edit';
import AddNewNote from './components/add_new_note';
import ProjectList from './containers/project_list';
import Hamburger from './components/hamburger';
import Navigation from './components/navigation';
import SignIn from './components/sign_in';
import Home from './components/home';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="Domain">
          <Hamburger />
          <Navigation />
          <div className="Stage">
            <div className="Stage-wrap">
              <Switch>
                <Route path="/notes/new" component={AddNewNote} />
                <Route path="/notes/edit/:slug" component={EditNote} />
                <Route path="/notes/:slug" component={NoteShow} />
                <Route exact path="/notes" component={NoteList} />
                <Route exact path="/artifacts" component={ProjectList} />
                <Route exact path="/info" component={Info} />
                <Route exact path="/" component={Home} />
                <Route exact path="/sign-in" component={SignIn} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('App')
);
