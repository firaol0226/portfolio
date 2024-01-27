import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './styles/NavBar.css'; // Import the CSS file

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    document.getElementById(e.key).scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  return (
    <div className="navbar-container">
      <Button className="menu-button" type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Navigation"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="vertical" onClick={handleMenuClick}>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="experience">Experience</Menu.Item>
          <Menu.Item key="education">Education</Menu.Item>
          <Menu.Item key="blog">Blogs</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}

export default NavBar;
