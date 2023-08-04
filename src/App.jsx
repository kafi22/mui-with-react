import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {Home, Business, Culture, Design, Errorpage, Health, Layoutpage, Opinion, Politics, Science, Styles, Technology, Travel } from '../src/Pages'

const App = () => {


  const route = createBrowserRouter([
    {
      path : '/',
      element : <Layoutpage />,

      children : [

        {
          index : true,
          element : <Home />

        },

        {
          path : 'design',
          element : <Design />
        },

        {
          path : 'business',
          element : <Business />
        }

      ]
    }
  ])

  return (
    
    <RouterProvider router={route} />

  )
}

export default App;