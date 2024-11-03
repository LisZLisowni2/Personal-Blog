import React from 'react'
import NavBar from './components/NavBar/navbar'
import PostList from './components/Posts/postslist'
import Post from './components/Posts/Post/post'
import Footer from './components/Footer/footer'
import LoginForm from './components/User/login'
import RegisterForm from './components/User/register'
import UserDetails from './components/User/details'
import EditPostForm from './components/Posts/Post/postEdit'
import AddPostForm from './components/Posts/Post/postAdd'
import DeletePost from './components/Posts/Post/postDelete'
import { PostProvide } from './context/PostContext'
import { UserProvide } from './context/UserContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <UserProvide>
    <PostProvide>
      <Router>
        <div className="flex flex-col h-screen">
          <NavBar />
            <Routes>
              <Route path='/' element={<PostList/>} />
              <Route path='/:id' element={<Post/>} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />}/>
              <Route path='/user' element={<UserDetails />}/>
              <Route path='/edit/:id' element={<EditPostForm />} />
              <Route path='/delete/:id' element={<DeletePost />} />
              <Route path='/add' element={<AddPostForm />} />
            </Routes>
          <Footer className="content-end"/>
        </div>
      </Router>
    </PostProvide>
    </UserProvide>
  )
}

export default App
