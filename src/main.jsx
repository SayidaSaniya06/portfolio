import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// this is a function which doesn't work alone 
const router =  createBrowserRouter(
  createRoutesFromElements(
    // Router is a component, whaterver element is loading it will be loaded after the slash /
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='experience' element={<Experience/>} />
      <Route path='skills' element={<Skills/>} />
      <Route path='projects' element={<Projects/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
