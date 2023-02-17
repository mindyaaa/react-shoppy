import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';

const router = createBrowserRouter([
  {
  path : "/",
  element : <Header />,
  errorElement : <Error></Error>,
  children : [{
    index : true,
    element : <h1>메인화면</h1>
  }, 
  {
    path : "/products",
    element : <p>All Products</p>
  }, 
  {
    path : "/products/new",
    element : <p>NEw Products</p>
  }, {

    path : "/products/:id",
    element : <p>ProductDetails</p>
  }, 
  {
    path : "/cart",
    element : <p>cart</p>
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App></App> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
