import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'


import MainPage from './main-page'

ReactDom.render(<MainPage />, document.getElementById('app'))