import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import { NOTES, ARTIFACTS, INFO, HOME } from './constants';
import ScrollToTop from './components/scroll_to_top';
import Info from './components/info';
import NoteList from './containers/note_list';
import NoteShow from './containers/note_show';
import EditNote from './containers/note_edit';
import AddNewNote from './components/add_new_note';
import AddNewSubject from './components/add_new_subject';
import Artifacts from './containers/artifacts';
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
        <ScrollToTop>
          <div className="Domain">
            <Hamburger />
            <Navigation />
            <div className="Stage">
              <div className="Stage-wrap">
                <Switch>
                  <Route exact path={HOME} component={Home} />
                  <Route path="/notes/new" component={AddNewNote} />
                  <Route path="/subjects/new" component={AddNewSubject} />
                  <Route path="/notes/edit/:slug" component={EditNote} />
                  <Route path="/notes/:slug" component={NoteShow} />
                  <Route exact path={NOTES} component={NoteList} />
                  <Route exact path={ARTIFACTS} component={Artifacts} />
                  <Route exact path={INFO} component={Info} />
                  <Route exact path="/sign-in" component={SignIn} />
                </Switch>
              </div>
              <footer className="Footer">made by Aaron Bijan Moradi</footer>
            </div>
          </div>
        </ScrollToTop>
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('App')
);
