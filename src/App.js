import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AboveNavbar from "./components/AboveNavbar";
import Navbar from "./components/Navbar";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Product from "./components/Products/Products";
import About from "./Pages/About/About";
import Home from "./Pages/Home";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "react-use-cart";
import ProductContext from "./Context/productContext";
import First from "./components/Products//image 488.png";
import Second from "./components/Products/image 489.png";
import Third from "./components/Products/image 490.png";
import Fourth from "./components/Products/image 491.png";
import Five from "./components/Products/image 495.png";
import Six from "./components/Products/image 494.png";
import Seven from "./components/Products/image 493.png";
import Eight from "./components/Products/image 492.png";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

const App = () => {
  const productData = {
    firstFour: [
      {
        id: 1,
        title: "Green Armchair",
        price: 380,
        cutPrice: 450,
        img: First,
        disc: "-16%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
      {
        id: 2,
        title: "Bamboo Lamp",
        price: 86,
        cutPrice: 380,
        img: Second,
        disc: "-14%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
      {
        id: 3,
        title: "Vevet Chair",
        price: 74,
        cutPrice: 300,
        img: Third,
        disc: "-12%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
      {
        id: 4,
        title: "Metal Pedent Light",
        price: 270,
        cutPrice: 560.0,
        img: Fourth,
        disc: "-40%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
    ],
    productDataItem: [
      {
        id: 5,
        title: "Linen Lamp Shade",
        price: 175,
        cutPrice: 380,
        img: Five,
        disc: "-20%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
      {
        id: 6,
        title: "Grey Concrete Pot",
        price: 380,
        cutPrice: 400,
        img: Six,
        disc: "-10%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
      {
        id: 7,
        title: "Table Lamp Jute",
        price: 79,
        cutPrice: 380,
        img: Seven,
        disc: "-70%",
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
      {
        id: 8,
        title: "Leaf Print Coushion",
        price: 380,
        cutPrice: 599,
        disc: "-25%",
        img: Eight,
        desc: [
          "Talk digital shark heads-up door win involved turn timepoint bed. Room management exploratory they forward should reinvent field. Dunder buy-in first invested gave ipsum down email monday elephant. Please pushback deliverables dive best.",
          "Commitment are by world across ui first charts. 2 unit live whatever diarize when closing all know. Now anomalies shelf-ware you win-win-win me close plane. Don’t stop then tomorrow work. Creep procrastinating break support sky.",
        ],
      },
    ],
  };

  return (
    <>
      <ProductContext.Provider value={productData}>
        <CartProvider>
          <BrowserRouter value={productData}>
            <div style={styles.appContainer}>
              <AboveNavbar />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />{" "}
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <AboveFooter />
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductContext.Provider>
    </>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

export default App;
