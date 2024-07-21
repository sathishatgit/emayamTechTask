// src/App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { ConfigProvider, Layout } from "antd";
import Navbar from "./components/Navbar";
import Errro from "./pages/Errro";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FeedBack from "./pages/FeedBack";

const { Header, Content } = Layout;

const App = () => {
  const user = localStorage.getItem("userStatus");
  const userGroup = localStorage.getItem("userGroup");

  return (
    <Router>
      <ConfigProvider>
        <Layout>
          {user && (
            <Header>
              <Navbar />
            </Header>
          )}
          <Content style={{ padding: "20px" }}>
            {!user ? (
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            ) : (
              <Routes>
                {!userGroup ? (
                  <>
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/feedback" element={<FeedBack />} />
                  </>
                ) : (
                  <>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                  </>
                )}
                <Route path="*" element={<Errro />} />
              </Routes>
            )}
          </Content>
        </Layout>
      </ConfigProvider>
    </Router>
  );
};

export default App;
