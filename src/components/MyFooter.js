import React from 'react';
import { Layout, Typography } from 'antd';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './styles/MyFooter.css';

const { Footer } = Layout;
const { Title } = Typography;

function MyFooter() {
  return (
    <Footer className="footer">
      <Title level={4} className="footer-title">Firaol Gerba</Title>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="footer-icon" />
        </a>
        <a href="https://twitter.com/DugumaFiraol" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
      </div>
      <div className="footer-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#blog">Blogs</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-copy">
        © 2024 Firaol Gerba. All rights reserved.
      </div>
    </Footer>
  );
}

export default MyFooter;
