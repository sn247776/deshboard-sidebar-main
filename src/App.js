import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Franchise from "./pages/Franchise.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar";
import NewFranchise from "./pages/NewFranchise";
const App = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return (
      <>
        <Login />
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact={true} element={<Login />} />
        <Route
          path="/"
          element={
            <Sidebar>
              <NavBar page="Main Dashboard" />
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          exact={true}
          path="/dashboard"
          element={
            <Sidebar>
              <NavBar page="Main Dashboard" />
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <NavBar page="Profile" />
              <Profile />
            </Sidebar>
          }
        />
        <Route
          path="/comment"
          element={
            <Sidebar>
              <Comment />
            </Sidebar>
          }
        />
        <Route
          path="/franchise"
          element={
            <Sidebar>
              <Franchise />
            </Sidebar>
          }
        />

        <Route
          path="/franchise/new"
          element={
            <Sidebar>
              <NavBar page="New Franchise" />
              <NewFranchise />
            </Sidebar>
          }
        />

        <Route
          path="/product"
          element={
            <Sidebar>
              <Product />
            </Sidebar>
          }
        />
        <Route
          path="/productList"
          element={
            <Sidebar>
              <ProductList />
            </Sidebar>
          }
        />
      </Routes>
      {/* <Sidebar>
        <Routes>
          <Route path="/" exact={true} element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar> */}
    </BrowserRouter>
  );
};

export default App;
