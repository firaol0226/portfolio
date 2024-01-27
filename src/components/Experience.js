import React from 'react';
import { Layout, Typography } from 'antd';
import bagIcon from '../img/bag.png'; // Make sure this path is correct
import './styles/Experience.css'; 

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Experience() {
  const titleStyle = { color: "Black", fontFamily: "'poppins-bold', sans-serif" };
  const contentStyle = { color: "#C0C0C0", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" };

  return (
    <Layout className="experience-layout">
        <Title level={2} id="experience" className="experience-text">Experience</Title>
        <Content  className="experience-content">
          <div className="timeline">
            {/* Repeat this block for each experience entry */}
            <div className="timeline-item">
              <div className="timeline-info">
                <Title className="exp-title" level={4} style={titleStyle}>Java Developer</Title>
                <Paragraph className='date-italic' style={contentStyle}>November 2020 - October 2021</Paragraph>
              </div>
              <img src={bagIcon} alt="Bag Icon" className="bag-icon" />
              <div className="timeline-content">
                <Title className="exp-title" level={4} style={titleStyle}>Vintage Technologies PLC</Title>
                <Paragraph style={contentStyle}>I enhanced a Healthcare System by implementing a secure, scalable RESTful API using Spring technologies. Resolved critical production issues, resulting in a 15% increase in system uptime. Additionally, I refactored a legacy codebase, leading to a 25% performance improvement and fewer runtime errors.</Paragraph>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-info">
                <Title className="exp-title" level={4} style={titleStyle}>Full Stack Developer</Title>
                <Paragraph className='date-italic' style={contentStyle}>September 2016 - October 2020</Paragraph>
              </div>
              <img src={bagIcon} alt="Bag Icon" className="bag-icon" />
              <div className="timeline-content">
                <Title className="exp-title" level={4} style={titleStyle}>ZainX Technologies PLC</Title>
                <Paragraph style={contentStyle}>I streamlined inventory processes with RESTful APIs in Node.js, reducing user errors by 40% and enhancing satisfaction. My migration of a web app to microservices using Docker and Kubernetes cut development time by 25%. I implemented Selenium & JUnit testing, reducing manual efforts by 30%. In a team, I developed a full-stack Agricultural Support Application with Spring Boot and React, improving agricultural efficiency. I also created a secure e-commerce platform in Java, boosting profits by 30%. Additionally, I led workshops that enhanced team productivity by 20%.</Paragraph>
              </div>
            </div>
            {/* ... other experience entries ... */}
          </div>
        </Content>
    </Layout>
  );
}

export default Experience;
