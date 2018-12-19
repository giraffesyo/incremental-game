import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// We might use this in the future for offline capabilities of the game, but for now leaving it unregistered.
serviceWorker.unregister()
