// src/pages/Home.js
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <Title>Welcome to Sathish Technology</Title>
      <Paragraph>
        Sathish Technology is a leading software company specializing in web and
        app development. We provide top-notch services to our clients to help
        them achieve their business goals.
      </Paragraph>
    </div>
  );
};

export default Home;
