
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import Download from './pages/Download.jsx'
import NotFound from './pages/NotFound.jsx'
import Blog from './pages/Blog.jsx'
import "@fontsource/nunito";              // defaults to weight 400
import "@fontsource/nunito/700.css";     // optional: specific weight


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home/> },
      { path: 'products', element: <Products/> },
      { path: 'services', element: <Services/> },
      { path: 'pricing', element: <Pricing/> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/> },
      { path: 'download', element: <Download/> },
      { path: 'blog', element: <Blog /> }

    ]
  },
  { path: '*', element: <NotFound/> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
