import React, { Component } from 'react'
import { Menu } from './menu/'


import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket']
});

import './styles/main.scss'

class App extends Component {

  componentWillMount() {
    // socket.on('connect', function () { 
    //   console.log('lol')
    // });
    // socket.on('data', function (data) {
    //   console.log(data, '@__@_@_@_@__@_@__@_@_@@')
    // });

    // socket.on('disconnect', function () { 
    //   console.log('DSA')
    // });
  }


  render() {
    return (<div>
      App Component
      <Menu />
    </div>)
  }
}

export default App


