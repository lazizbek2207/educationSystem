import React from 'react'
import { Category, Container, Form, Logo, User } from './style'
import logo from '../../assets/img/edu.png'
import user from '../../assets/img/user.jpg'
export default function Navbar() {
  return (
    <Container>
        <Category>
            <Logo>
                <Logo.Img src={logo}/>
                <Logo.Title><span>Edu</span>System</Logo.Title>
            </Logo> 
            <Form>
            <Form.Img ><i className="bi bi-search"></i></Form.Img>
            <Form.Input placeholder="Qidirish..." />
        </Form>
        </Category>
       
        <User>
            <User.Img  src={user}/>
        </User>
    </Container>
  )
}
