import React from 'react'
import Message  from './components/Mesages.jsx'
import Cities from './components/Cities.jsx'


let Cites = ['German', 'US', 'Syria', 'Brit']


function App() {
  return (
    <>
    <Cities Cites={Cites} />
    </>
  )
}

export default App
