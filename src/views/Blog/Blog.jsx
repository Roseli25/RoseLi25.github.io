import React from 'react'
import '../Blog/blog.css'
import LeftSideMenu from '../../components/LeftSideMenu'
import TopHeader from '../../components/TopHeader'
import { Route, Routes } from "react-router-dom"
import Menu from './menu/Menu'
import Stack from './stack/Stack'
import Articles from './articles/Articles'
import Road from './road/Road'
import Resume from './resume/Resume'
import Life from './life/Life'
import { Layout } from 'antd'
const { Content, Footer } = Layout;

function Blog() {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <LeftSideMenu></LeftSideMenu>
        <Layout> 
        <TopHeader></TopHeader>
          <Content
            style={{ margin: '24px 16px 0', height: 'calc(100% - 48px)'}}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "white",
                height:"100%"
              }}
            >
              <Routes>
                <Route path="/Menu" element={<Resume />} />
                <Route path="/Stack" element={<Stack />} />
                <Route path="/Articles" element={<Articles />} />
                <Route path="/Road" element={<Road />} />
                <Route path="/Resume" element={<Menu />} />
                <Route path="/Life" element={<Life />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            React&Ant Design ©2023 Created by LiTiancheng
          </Footer>
        </Layout>
      </Layout>
    </> 
  )
}

export default Blog
