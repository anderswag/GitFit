import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgressExampleDeterminate from './circleProgress.jsx';
import TableExampleSimple from './mentorList.jsx';
import Geosuggest from 'react-geosuggest';
import NavBar from './navbar.jsx';
import Notification from './modules/notification.jsx';

const io = require('socket.io-client');
// const socket = require('socketConnection');
import socket from './socketConnection';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      notiStatus:null
    })
  }

  componentDidMount() {
    socket.on('connect', function(socket) {
        console.log('Connected to socket');
    });

    // socket.on("server::note", function(data) {
    //   //Do notification here//
    //   console.log(data);
    // });
  }


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
