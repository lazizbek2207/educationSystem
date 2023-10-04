import React from 'react'
import { Container } from './style'
import Navbar from '../navbar'
import Menu from '../menu'
import Sidebar from '../sidebar'
import Main from '../main'
import Content from '../Content'

export default function Wrapper() {
    return (
        <Container>
            <Navbar />
            <Menu />
            <Content/>
        </Container>
    )
}
