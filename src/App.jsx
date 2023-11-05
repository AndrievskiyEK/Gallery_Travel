import React from 'react'
import './index.css'
import Heading from './components/Heading/Heading'
import Gallery from './components/Gallery/Gallery'
//import AboutSection from './components/AboutSection/AboutSection'
//import ProjectsSection from './components/ProjectsSection/ProjectsSection'

function App() {
  return (
    <div className='container'>
      <Heading/>
      <Gallery/>
    </div>
  )
}

export default App

