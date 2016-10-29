import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgressExampleDeterminate from './circleProgress.jsx';
import TableExampleSimple from './mentorList.jsx';
import Geosuggest from 'react-geosuggest';
import NavBar from './navbar.jsx';
import Notification from './modules/notification.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Notification/>
        {this.props.children}
      </div>
    );
  }
}
export default App;
