// src/components/SignUp.js
import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Title, Text, Link } = Typography;
const { Option } = Select;
const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    const { emailId, password, confirmPassword, mobileNumber, group } = values;
    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:5000/user/signup", {
          emailId,
          password,
          mobileNumber,
          group,
        });
        message.success("User signed up successfully!");
        setTimeout(() => navigate("/signin"), 2000);
      } catch (error) {
        message.error("Try Again!");
      }
    } else {
      message.warning("Passwords do not match");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <Title level={2}>Sign Up</Title>
      <Form form={form} name="signup" onFinish={handleFinish} layout="vertical">
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
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Mobile Number"
          name="mobileNumber"
          rules={[
            { required: true, message: "Please input your mobile number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Group"
          name="group"
          rules={[{ required: true, message: "Please select a group!" }]}
        >
          <Select>
            <Option value="a">A</Option>
            <Option value="b">B</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Already have an account?{" "}
        <Link onClick={() => navigate("/signin")}>Sign In</Link>
      </Text>
    </div>
  );
};

export default SignUp;
