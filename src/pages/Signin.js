import React, { useState } from "react";
import { Form, Input, Button, Typography, message, notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Title, Text, Link } = Typography;

const SignIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const userLogin = async (emailId, password) => {
    try {
      const response = await axios.post("http://localhost:5000/user/signin", {
        emailId,
        password,
      });
      console.log(response);
      localStorage.setItem("userStatus", "true");
      if (response.data.group == "a") {
        localStorage.setItem("userGroup", "true");
      }
      message.success("User signed in successfully!");
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      notification.error({
        message: "Sign-in failed",
        description: "Please try again.",
      });
    }
  };

  const handleFinish = (values) => {
    const { emailId, password } = values;
    if (emailId && password) {
      userLogin(emailId, password);
    } else {
      notification.warning({
        message: "Incomplete fields",
        description: "Please fill in both fields.",
      });
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: "50px" }}>
      <Title level={2}>Sign In</Title>
      <Form form={form} name="signin" onFinish={handleFinish} layout="vertical">
        <Form.Item
          label="Email"
          name="emailId"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Don't have an account?{" "}
        <Link onClick={() => navigate("/signup")}>Sign Up</Link>
      </Text>
    </div>
  );
};

export default SignIn;
