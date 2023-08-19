import React from 'react'
import { useState, useEffect } from 'react';
import "./index.css"
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom';
import { FolderOpenOutlined, HomeOutlined, DesktopOutlined, UserOutlined, SmileOutlined, RiseOutlined } from '@ant-design/icons';
const { Sider } = Layout;

function LeftSideMenu() {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    // 根据当前路径设置选中的菜单项
    const path = location.pathname;
    const key = getKeyFromPath(path);
    setSelectedKey(key);
  }, [location]);

  const getKeyFromPath = (path) => {
    // 根据路径返回对应的菜单项 key
    if (path === '/Blog/Menu') return '1';
    if (path === '/Blog/Stack') return '2';
    if (path === '/Blog/Articles') return '3';
    if (path === '/Blog/Road') return '4';
    if (path === '/Blog/Resume') return '5';
    if (path === '/Blog/Life') return '6';
    return '';
  };

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ height: '100%' }}
    >
      <Link to="/">
        <div className="demo-logo-vertical">你我山巅自相逢</div>
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
      >
        <Menu.Item
          key="1"
          icon={<HomeOutlined />}
          onClick={() => handleMenuClick('1')}
        >
          <Link to="/Blog/Menu">首页</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<DesktopOutlined />}
          onClick={() => handleMenuClick('2')}
        >
          <Link to="/Blog/Stack">技术栈</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<FolderOpenOutlined />}
          onClick={() => handleMenuClick('3')}
        >
          <Link to="/Blog/Articles">博客</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<RiseOutlined />}
          onClick={() => handleMenuClick('4')}
        >
          <Link to="/Blog/Road">实习经历</Link>
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<UserOutlined />}
          onClick={() => handleMenuClick('5')}
        >
          <Link to="/Blog/Resume">本网站</Link>
        </Menu.Item>
        <Menu.Item
          key="6"
          icon={<SmileOutlined />}
          onClick={() => handleMenuClick('6')}
        >
          <Link to="/Blog/Life">生活</Link>
        </Menu.Item>
      </Menu>

    </Sider>
  )
}

export default LeftSideMenu
