import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddBooks from '../Pages/AddBooks';
import HomePage from '../Pages/HomePage';
import EditBooks from '../Pages/EditBooks';

const AllRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addbooks" element={<AddBooks />} />
            <Route path='/editbook/:id' element={<EditBooks/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes