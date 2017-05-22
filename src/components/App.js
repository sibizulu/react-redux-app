import React, { Component } from 'react'
import Listing from '../containers/Listing'
import AddList from '../containers/AddList'
import Favorite from '../containers/Favorite'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to React</h2>
          <AddList />
        </div>
        <Listing />
        <Favorite />
      </div>
    )
  }
}

export default App
