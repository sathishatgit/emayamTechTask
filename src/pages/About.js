// src/pages/About.js
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
      <Title>About Us</Title>
      <Paragraph>
        Sathish Technology is dedicated to delivering innovative software
        solutions. Our team of experts is skilled in the latest technologies to
        ensure our clients receive the best service possible. Whether it's web
        development, app development, or custom software solutions, we have the
        expertise to meet your needs.
      </Paragraph>
    </div>
  );
};

export default About;
