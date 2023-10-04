import React from 'react'
import { Container } from './style'
import Sidebar from '../sidebar'
import Main from '../main'

export default function Content() {
  return (
    <Container>
      <Sidebar/>
      <Main/>
    </Container>
  )
}
