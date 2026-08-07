import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Home from './components/Navbar/Home'
import About from './components/Navbar/About'
import Services from './components/Navbar/Services'
import Projects from './components/Navbar/Projects'
import Contact from './components/Navbar/Contact'
import Notfound from './components/Navbar/Notfound'

import Hero from './components/hero/Hero'

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Notfound />,
      },
    ],
  },
])


function App() {

  return (
    <>
    <div>
      <RouterProvider router={router}/>
    </div>
      <Hero/>
    </>
  )
}

export default App
