import styled from "styled-components";
import Menu from "../menu";

export const Container = styled.div`
transition: 0.4s;
 width:${({active})=>active?"250px":"114px"};
 min-width: ${({active})=>active?"250px":"114px"};
 border-right: 1px solid #0e1726;
 height: calc(100vh - 120px);
 padding: 30px;
 color: #888ea8;
`

export const Menus = styled.ul`
 
`
Menus.Item = styled.li`
display: flex;
align-items: center;
gap: 10px;
margin: 30px 0;
a{
    font-size: 20px;
 color: #888ea8;
 cursor: pointer;
 display: flex;
 width: 100%;
 align-items: center;
 transition: 0.2s;
 padding: 0 10px;
}
.active{
    background-color: rgba(96, 125, 139, 0.54) !important;
    /* padding: 0 10px; */
    border-radius: 10px;
    color: #fff;
 }
 
`


Menus.Img = styled.div`
width:16px;
color: #888ea8;
font-size: 25px;
margin-right: 20px;
`

