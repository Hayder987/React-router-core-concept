import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';
import ErrorPages from './pages/ErrorPages.jsx';
import PostDetails from './pages/PostDetails.jsx';

const router = createBrowserRouter([
  {
    element: <App></App>,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: "/blogs",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Blogs></Blogs>
      },
      {
        path: "/posts/:id",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider> 
  </StrictMode>,
)
