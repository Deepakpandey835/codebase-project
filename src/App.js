import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { MainHeading } from './style/components/Heading'
import Error from './pages/error'
import ForgetPassword from './pages/forgetpassword'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import Sidebar from './components/Shaerd/Sidebar'
import Dashboard from './components/Shaerd/Dashboard'
import Upload from './components/Shaerd/Upload'
import { AuthContextProvider } from './components/context/AuthContext'


const App = () => {
  return (
    <div >
      <AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path='/'  element={<MainHeading>Hello Dev's </MainHeading>} />
        <Route path='/forgetpassword' element={<ForgetPassword> </ForgetPassword>} />
        <Route path='/error' element={<Error></Error>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/upload' element={<Upload></Upload>} />
        <Route path='/sidebar' element={<Sidebar></Sidebar>} />
      </Routes>
      <Footer />
      </AuthContextProvider>
    </div>
  )
}

export default App
