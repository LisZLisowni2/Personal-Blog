import { useState } from 'react'
import NavBar from './components/NavBar/navbar'
import Content from './components/Posts/postslist'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Content />
      <Footer className="content-end"/>
    </div>
  )
}

export default App
