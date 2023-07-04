import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import ListEmploye from './ListEmploye'
import Detail from './Detail'
import Ajoute from './Ajoute'
import EmployesApi from './EmployesApi'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<ListEmploye />} />
          <Route path='add' element={<Ajoute />} />
          <Route path=':nom' element={<Detail />} />
          <Route path='Api' element={<EmployesApi />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
