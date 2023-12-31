import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {Home, Business, Culture, Design, Errorpage, Health, Layoutpage, Opinion, Politics, Science, Styles, Technology, Travel } from '../src/Pages'
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

const App = () => {


  const route = createBrowserRouter([
    {
      path : '/',
      element : <Layoutpage />,
      errorElement : <Errorpage />,

      children : [

        {
          index : true,
          element : <Home />

        },

        {
          path : 'technology',
          element : <Technology />
        },

        {
          path : 'design',
          element : <Design />
        },

        {
          path : 'culture',
          element : <Culture />
        },

        {

          path : 'business',
          element : <Business />
        },


        {
          path : 'politics',
          element : <Politics />
        },

        {
          path : 'opinion',
          element : <Opinion />
        },

        {
          path : 'science',
          element : <Science />
        },

        {
          path : 'health',
          element : <Health />
        },

        {
          path : 'style',
          element : <Styles />
        },

        {
          path : 'travel',
          element : <Travel />
        },

        // {

        //   path : 'signup',
        //   element : <Signup />
        // },

        // {
        //   path : 'signin',
        //   element : <Signin />
        // }



      ],
    },

    {

      path : 'signup',
      element : <Signup />,
      errorElement : <Errorpage />,

    },

    {
      path : 'signin',
      element : <Signin />,
      errorElement : <Errorpage />,
     
    }

   
  ])

  return (
    
    <RouterProvider router={route} />

  )
}

export default App;