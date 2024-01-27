// import logo from './logo.svg';
// import 'antd/dist/antd.css';
// import 'antd/lib/style/themes';
import React from 'react';
import './App.css';
import {Layout} from 'antd';
import { Routes,Route} from 'react-router-dom';

import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Footer from  './components/MyFooter';
import Blog from'./components/blog';
import BlogBody from './components/BlogBody';

function App() {

  return (
    
    <Layout>
      <NavBar />
      
      <Routes>
          <Route path="/" element={<>
            <Welcome />
            <About />
            <Experience />
            <Education />
            <Blog />
            <Contact />
            <Footer />
          </>} />
          <Route path="/blogdetails" element={<BlogBody />} />
      </Routes>
    </Layout>
  );
}

export default App;
