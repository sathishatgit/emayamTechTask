// src/components/Navbar.js
import React from "react";
import { Menu, message } from "antd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const group = localStorage.getItem("userGroup") ? "A" : "B";
  const logOut = () => {
    localStorage.removeItem("userStatus");

    localStorage.removeItem("userGroup");
    localStorage.removeItem("logged");
    window.location.reload();
  };
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" onClick={() => navigate("/home")}>
        Home
      </Menu.Item>
      <Menu.Item key="about-us" onClick={() => navigate("/about")}>
        About Us
      </Menu.Item>
      <Menu.Item key="feedback" onClick={() => navigate("/feedback")}>
        Feedback
      </Menu.Item>
      <Menu.Item key="contact-us" onClick={() => navigate("/contact")}>
        Contact Us
      </Menu.Item>
      <Menu.Item key="logOut" onClick={logOut} style={{ marginLeft: "auto" }}>
        Log Out
      </Menu.Item>

      <Menu.Item
        key="group"
        onClick={() => message.info(`Group Name is ${group}`)}
      >
        Group - {group}
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
