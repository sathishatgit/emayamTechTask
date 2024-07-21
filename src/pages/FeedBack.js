// src/pages/FeedBack.js
import React from "react";
import { Typography, Form, Input, Button } from "antd";

const { Title } = Typography;

const FeedBack = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Title>Feedback</Title>
      <Form
        name="feedback"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="feedback"
          label="Feedback"
          rules={[{ required: true, message: "Please enter your feedback!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FeedBack;
