import React from 'react'
import { Container, Menus } from './style'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ContextToggle } from '../../context/Toggle';
export default function Sidebar() {
    const [toggle,setToggle] = useContext(ContextToggle)
    return (
        <Container active={toggle?"true":""}>
            <Menus>
                <Menus.Item>

                    <NavLink to={"/reciption"} >
                        <Menus.Img>
                            <i className="bi bi-receipt"></i>
                        </Menus.Img>
                       {
                        toggle? <span>Qabul</span>:""
                       }
                    </NavLink>
                </Menus.Item>
                <Menus.Item>

                    <NavLink to={"/groups"}>
                        <Menus.Img>
                            <i className="bi bi-microsoft-teams"></i>
                        </Menus.Img>
                       {
                        toggle? <span>Guruhlar</span>:""
                       }
                    </NavLink>
                </Menus.Item>
                <Menus.Item>

                    <NavLink to={"/teachers"}>
                        <Menus.Img>
                            <i className="bi bi-person-video3"></i>
                        </Menus.Img>
                   {
                    toggle? <span>    O'qituvchilar</span>:""
                   }
                    </NavLink>
                </Menus.Item>
                <Menus.Item>

                    <NavLink to={"/students"}>
                        <Menus.Img>
                            <i className="bi bi-people-fill"></i>
                        </Menus.Img>
                     {
                        toggle?  <span> O'quvchilar</span>:""
                     }
                    </NavLink>
                </Menus.Item>
            </Menus>
        </Container>
    )
}
