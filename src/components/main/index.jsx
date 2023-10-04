import React from 'react'
import { Container } from './style'
import { Route, Routes } from 'react-router'
import Groups from '../../pages/Groups'
import CreatGroups from '../../pages/CreateGroup'
import Teachers from '../../pages/Teachers'
import Students from '../../pages/Students'
import Reciption from '../../pages/Reciption'
import CreateReaciption from '../../pages/CreateReaciption'
import CreateTeacher from '../../pages/CreateTeacher'

export default function Main() {
  return (
   <Container>
      <Routes>
        <Route path='/' element={<Reciption/>}/>
        <Route path='/reciption' element={<Reciption/>}/>
        <Route path='/reciption/:id' element={<CreateReaciption/>}/>
        <Route path='/groups' element={<Groups/>}/>
        <Route path='/groups/:id' element={<CreatGroups/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/teachers/:id' element={<CreateTeacher/>}/>
        <Route path='/students' element={<Students/>}/>
      </Routes>
   </Container>
  )
}
