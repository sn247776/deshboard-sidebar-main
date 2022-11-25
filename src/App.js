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
            <div className="dashboard-layout">
              <div className="side-main">
                <div className="sticky-side">
                  <Sidebar />
                </div>
              </div>
              <div>
                <div className="sticky-nav">
                  <NavBar page="Main Dashboard" />
                </div>
                <div>
                  <Dashboard />
                </div>
              </div>
            </div>
          }
        />
        <Route
          exact={true}
          path="/dashboard"
          element={
            <div className="dashboard-layout">
              <div className="side-main">
                <div className="sticky-side">
                  <Sidebar />
                </div>
              </div>
              <div>
                <div className="sticky-nav">
                  <NavBar page="Main Dashboard" />
                </div>
                <div>
                  <Dashboard />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div className="dashboard-layout">
              <div className="side-main">
                <div className="sticky-side">
                  <Sidebar />
                </div>
              </div>
              <div>
                <div className="sticky-nav">
                  <NavBar page="Profile" />
                </div>
                <Profile />
              </div>
            </div>
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
            <div className="dashboard-layout">
              <div className="side-main">
                <div className="sticky-side">
                  <Sidebar />
                </div>
              </div>
              <div>
                <div className="sticky-nav">
                  <NavBar page="New Franchise" />
                </div>
                <NewFranchise />
              </div>
            </div>
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
