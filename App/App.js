import React from 'react'
import Navigation from './Components/Navigation'
import 'sanitize.css'
class App extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}

export { App }