import React from 'react'
import Start from '../views/start/Start'
import Blog from '../views/Blog/Blog'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Blog/*" element={<Blog />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default IndexRouter
