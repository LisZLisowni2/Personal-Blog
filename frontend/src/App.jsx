import React from 'react'
import NavBar from './components/NavBar/navbar'
import PostList from './components/Posts/postslist'
import Post from './components/Posts/Post/post'
import Footer from './components/Footer/footer'
import LoginForm from './components/User/login'
import RegisterForm from './components/User/register'
import { PostProvide } from './context/PostContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <PostProvide>
      <Router>
        <div className="flex flex-col h-screen">
          <NavBar />
            <Routes>
              <Route path='/' element={<PostList/>} />
              <Route path='/:id' element={<Post/>} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />}/>
            </Routes>
          <Footer className="content-end"/>
        </div>
      </Router>
    </PostProvide>
  )
}

export default App
