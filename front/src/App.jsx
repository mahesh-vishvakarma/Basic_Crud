import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create';
import Show from './Show';
import Update from './Update';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/show' element={<Show />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>

    </>

  )
}

export default App
