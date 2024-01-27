import React from 'react';
import { Layout, Typography } from 'antd';
import degreeIcon from '../img/degree.png'; // Replace with your actual icon path
import './styles/Education.css'; 

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Education() {
  const titleStyle = { color: "Black", fontFamily: "'poppins-bold', sans-serif" };
  const contentStyle = { color: "#C0C0C0", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" };

  return (
    <Layout className="education-layout">
        <Title level={2} id="education" className="education-text">Education</Title>
        <Content  className="education-content">
          <div className="timeline">
            {/* Repeat this block for each education entry */}
            <div className="timeline-item">
              <div className="timeline-info">
                <Title className="exp-title" level={4} style={titleStyle}>Master's Degree</Title>
                <Paragraph className='date-italic' style={contentStyle}>January 2023 - October 2025</Paragraph>
              </div>
              <img src={degreeIcon} alt="Degree Icon" className="degree-icon" />
              <div className="timeline-content">
                <Title className="exp-title" level={4} style={titleStyle}>Maharishi International University(United States)</Title>
                <Paragraph style={contentStyle}>Master of Science in Computer Science, in progress via distance education; expected completion October 2025</Paragraph>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-info">
                <Title className="exp-title" level={4} style={titleStyle}>Bachelor Degree</Title>
                <Paragraph className='date-italic' style={contentStyle}>October 2011 - July 2016</Paragraph>
              </div>
              <img src={degreeIcon} alt="Degree Icon" className="degree-icon" />
              <div className="timeline-content">
                <Title className="exp-title"level={4} style={titleStyle}>Addis Ababa University(Ethiopia)</Title>
                <Paragraph style={contentStyle}>I completed my bachelor at Addis Ababa University in Civil Engineering.</Paragraph>
              </div>
            </div>
            {/* ... other education entries ... */}
          </div>
        </Content>
        <div class="line-breaker"></div>
    </Layout>
  );
}

export default Education;
