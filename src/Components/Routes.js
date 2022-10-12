import { createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import BookDetails from "./BookDel/BookDetails";
import Books from "./Books/Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home/Home";
import Root from "./Root";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path:'/home',
          element:<Home/>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
          
        },
        {
          path:'/books',
          element:<Books/>,
          
          
        },
        {
          path:'/about',
          element:<About/>
          
        },
        {
          path:'book/:id',
          element:<BookDetails/>,
          
          loader: ({params}) => fetch (`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        }
  
      ]
    },
   
  ])

  export default router