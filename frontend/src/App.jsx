import { useEffect, useState } from 'react'
import NavBar from './components/NavBar/navbar'
import Content from './components/Posts/postslist'
import Post from './components/Posts/Post/post'
import Footer from './components/Footer/footer'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/posts/", {
      withCredentials: true
    }).then(res => setPosts(res))
    .catch(err => console.error(err))
  }, [])

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar />
        <Routes>
          <Route path='/' element={<Content posts={posts}/>} />
          <Route path='/:id' element={<Post posts={posts} />} />
        </Routes>
        <Footer className="content-end"/>
      </div>
    </Router>
  )
}

export default App
