import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks';
import HomePage from '../Pages/HomePage';

const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addbooks" element={<AddBooks />} />
        </Routes>
    </div>
  )
}

export default AllRoutes