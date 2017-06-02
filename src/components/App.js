import React, { Component } from 'react'
import AddList from '../containers/AddList'
import Listing from '../containers/Listing'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

class App extends Component {
  render () {
    injectTapEventPlugin()
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className='App'>
          <div className='App-header'>
            <h2>Welcome to React</h2>
          </div>
          <AddList />
          <Listing />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
