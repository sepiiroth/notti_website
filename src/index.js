import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import color from "./utils/style/colors";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./utils/contexts/CartContext";
import { ModalProvider } from "./utils/contexts/ModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0; 
    color: ${color.font_color};
  }    
  
  div {
        font-family: "Questrial", sans-serif;
        color: ${color.secondary_text};
       
  }

  h1 {
    font-family: sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <ModalProvider>
        <Router>
          <GlobalStyle />
          <Message message="5€ DE RÉDUCTION EN REJOIGNANT LA NEWSLETTER !" />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="collections/all" element={<Collection />} />
            <Route path="product/:productId" element={<ProductPage />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer />
        </Router>
      </ModalProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
