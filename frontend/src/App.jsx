import { useEffect, useState } from 'react'
import NavBar from './components/NavBar/navbar'
import Content from './components/Posts/postslist'
import Footer from './components/Footer/footer'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = axios.get("http://127.0.0.1:3000/posts/")
    setPosts(fetchPosts)
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Content />
      <Footer className="content-end"/>
    </div>
  )
}

export default App
