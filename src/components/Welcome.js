import React from 'react';
import { DownOutlined} from '@ant-design/icons';
import './styles/Welcome.css';
import useTypingEffect from './styles/useTypingEffect';

function Welcome() {
  const typingText = useTypingEffect(["Software Developer", "Back-End Developer", "Full Stack Developer"], 100);

  const handleMoreAboutMeClick = () => {
    const aboutSection=document.getElementById("about");
    if(aboutSection){
        aboutSection.scrollIntoView({behavior:'smooth',block: 'start'});
    }
  };

  return (
    <div class="animated-background">
    <div className="welcome-container">
    
        <div class="shooting-star"></div>
      <div className="welcome-content">
        <h2>Hi, I'm</h2>
        <h1>Firaol Gerba</h1>
        <p>I'm a <span className="blue-text">{typingText}</span></p>
        <div className="more-about-me" onClick={handleMoreAboutMeClick}>
          About Me <DownOutlined />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Welcome;
