import React from 'react';
import { Layout, Typography, Button } from 'antd';
import './styles/About.css';
import profilePic from "../img/fir.jpg";
// Import additional icons as needed

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function About() {
  const resumeLink = "https://www.dropbox.com/scl/fi/2mo4cor36dhmzgql14t4f/FIRAOL-GERBA-Resume.doc?rlkey=gpcdkrau8aakv6dme6kwb68o8&dl=0";

  const backendSkills = [
    { name: "Java", imageUrl: "https://dev.java/assets/images/java-logo-vert-blk.png" },
    { name: "Node JS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" },
    { name: "MongoDB", imageUrl: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" },
    { name: "MySQL", imageUrl: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" },
    { name: "Spring", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png" },
    { name: "PostgreSQL", imageUrl: "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png" },
    // Add other backend skills here with their image URLs
  ];

  const frontendSkills = [
    { name: "React JS", imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { name: "JavaScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "BootStrap", imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png" },
    { name: "jQuery", imageUrl: "https://download.logo.wine/logo/JQuery/JQuery-Logo.wine.png" },
    { name: "HTML", imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174854.png" },
    { name: "CSS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" },
    // Add other frontend skills here with their image URLs
  ];

  const cloudSkills = [
    { name: "EC2", imageUrl: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg" },
    { name: "IAM", imageUrl: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/IAM-Identity-Center.svg" },
    { name: "S3", imageUrl: "https://seeklogo.com/images/A/amazon-s3-simple-storage-service-logo-9A3F37976E-seeklogo.com.png" },
    { name: "ELB", imageUrl: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Elastic-Load-Balancing.svg" },
    { name: "Cloudwatch", imageUrl: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg" },
    { name: "DynamoDB", imageUrl: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" },
    { name: "Lambda", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Amazon_Lambda_architecture_logo.png" },
    { name: "RDS", imageUrl: "https://icon.icepanel.io/AWS/svg/Database/RDS.svg" },
    { name: "SQS", imageUrl: "https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Queue-Service.svg" },
    { name: "API Gateway", imageUrl: "https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg" },
    { name: "Amplify", imageUrl: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg" },
    { name: "Cloud Front", imageUrl: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg" },
    { name: "SNS", imageUrl: "https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Notification-Service.svg" },

    // Add other cloud skills here with their image URLs
  ];

  const renderSkills = (skills) => (
    skills.map(skill => (
      <div className="skill-box" key={skill.name}>
        <img src={skill.imageUrl} alt={skill.name} className="skill-image" />
        <span className="skill-name">{skill.name}</span>
      </div>
    ))
  );

  return (
    <Layout className="about-layout">
      <Title level={2} id='about' className="abtme-text">About</Title>
      <Content>
        <div className="row">
          <div className="image-section">
            <img src={profilePic} alt="Profile" />
          </div>
          <div className="text-section">
            <Paragraph>
              With over 5 years of IT Solutions experience, spcializing in software development with a strong emphasis on Java, JavaScript, and React, complemented by a robust proficiency in Agile methodologies. Skilled in building scalable, secure web applications, integrating advanced APIs, and relational/NoSQL databases. Committed to continuously updating my skills with the latest technological advancements. Passionate about driving innovative outcomes through teamwork and cross-functional collaboration.
            </Paragraph>
          </div>
        </div>
        <div className="technology-container">
        <Title level={3} className="tech-title">Primary Technologies</Title>
          <div className="back-front-container">
            <div className="tech-section half-width">
              <Title level={3} className="centered-title">Backend</Title>
              <div className="tech-skills">
                {renderSkills(backendSkills)}
              </div>
            </div>
            <div className="tech-section half-width">
              <Title level={3} className="centered-title">Frontend</Title>
              <div className="tech-skills">
                {renderSkills(frontendSkills)}
              </div>
            </div>
          </div>
          <div className="tech-section full-width">
            <Title level={3} className="centered-title">Cloud</Title>
            <div className="tech-skills">
              {renderSkills(cloudSkills)}
            </div>
          </div>
        </div>
        <div className="resume-button-container">
          <Button 
            type="primary" 
            href={resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
          >
            Check My Resume
          </Button>
        </div>
      </Content>
      <div class="line-breaker"></div>

    </Layout>
  );
}

export default About;
