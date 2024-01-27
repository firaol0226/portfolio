import React from 'react';
import { Layout, Typography, Form, Input, Button } from 'antd';
import './styles/Contact.css';
import Paragraph from 'antd/es/skeleton/Paragraph';

const { Content } = Layout;
const { Title } = Typography;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Form Submit attempted")
    console.log(JSON.stringify(values));
    try {
      const response = await fetch('https://niy36c8fcl.execute-api.us-east-2.amazonaws.com/dev-stage/emailNotification', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Successfully Submitted!")
      form.resetFields(); // Clear form fields after successful submission
      console.log('Form submitted successfully');
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Layout className="contact-layout">
      <Title level={2} id="contact" className="contact-text">Contact</Title>
      <Paragraph>Feel free to reach out</Paragraph>
      <Content className="contact-content">
        <div className="title-container">
          <Title level={2} className="contact-title">
            Email Me 
          </Title>
        </div>
        <Form
          form={form}
          name="contact-form"
          className="contact-form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address' }, // Email validation rule
            ]}
          >
            <Input className="placeholder" placeholder="Your Email" />
          </Form.Item>

          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input className="placeholder" placeholder="Your Name" />
          </Form.Item>
          <Form.Item name="subject">
            <Input className="placeholder" placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}
          >
            <Input.TextArea className="placeholder" placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="contact-form-button">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Content>

    </Layout>
  );
}

export default Contact;
