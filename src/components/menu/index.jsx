import React from 'react'
import { Container, Toggle } from './style'
import { useContext } from 'react';
import { ContextToggle } from '../../context/Toggle';
export default function Menu() {
  const [toggle, setToggle] = useContext(ContextToggle)
  return (
    <Container>
      <Toggle onClick={()=>setToggle(!toggle)}>
        <i className="bi bi-list"></i>
      </Toggle>
    </Container>
  )
}
