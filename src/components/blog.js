// Blog.js

import React from 'react';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './styles/blog.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Blog() {
  // Sample blog data (you can replace it with your actual data)
  const blogs = [
    {
      title: 'Using AWS Lambda as a Microservice',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*WK_-gPDoCp29u8_MfStF7g.png',
      description: 'AWS Lambda is a serverless compute service that automatically scales and manages the infrastructure needed to run code in response to events. ',
      blogLink: '/blogdetails',
    },
    // Add more blog items as needed
  ];

  return (
    <div className="blog-section">
      <Content>
        <Title level={2} id='blog' className="blogs-text">Blogs</Title>
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <div className="blog-item" key={index}>
              <Link to={blog.blogLink}>
                <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
                <Title level={4} className="blog-title">
                  {blog.title}
                </Title>
                <Paragraph className="blog-description">
                  {blog.description}<strong style={{fontStyle: 'Italic',color:"rgb(177, 178, 179)"}}>Continue reading...</strong>

                </Paragraph>
              </Link>
            </div>
          ))}
        </div>
      </Content>
      <div class="line-breaker"></div>
    </div>
  );
}

export default Blog;
