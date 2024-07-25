import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './Components/About/About'
import Users from './Components/Users/Users'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import UserDetails from './Components/UserDetails/UserDetails'
import Posts from './Components/Posts/Posts'
import PostDetails from './Components/PostDetails/PostDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/users",
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users></Users>
      },
      {
        path:"/user/:userId",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path:"/posts",
        loader:()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
