import React from "react";
import ReactDOM from "react-dom/client";
import { store } from './app/store'
import App from "./src/App"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'))
import { HelmetProvider } from 'react-helmet-async';

root.render(
  <React.StrictMode>
    <Provider store={store} >
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </Provider>
  </React.StrictMode>
);