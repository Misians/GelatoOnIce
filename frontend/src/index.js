import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//paginas
import Home from './routes/Home'
import Produtos from './routes/Produtos';
import Ajuda from './routes/Ajuda';
import Contato from './routes/Contato';
import Receitas from './routes/Receitas'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/produtos",
          element: <Produtos />
        },
        {
          path: "/contato",
          element: <Contato />
        },
        {
          path: "/receitas",
          element: <Receitas />
        },
        {
          path: "/ajuda",
          element: <Ajuda />
        }
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
