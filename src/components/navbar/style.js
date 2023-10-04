import styled from "styled-components"

export const Container = styled.div`
 width: 100%;
 height: 70px;
 padding: 0 30px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
export const Category  =styled.div`
 display: flex;
 align-items: center;
`
export const Logo = styled.div`
 display: flex;
 align-items: center;
`
Logo.Img = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 50%;
`
Logo.Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #dfe3df;
  padding-left: 10px;
  opacity: 0.8;
  span{
    color: #23b4dd;
  }
`

export const  Form = styled.div`
 border: 0.5px solid #888ea8;
 width: 300px;
 border-radius: 5px;
 background-color: #0e1726;
 display: flex;
 align-items: center;
 margin-left: 35px;
`
Form.Input = styled.input`
 width: 100%;
 border: 0;
 background: none;
 outline: none;
 color: #888ea8;
 padding: 10px;
 font-size: 16px;
`
Form.Img = styled.div`
 color: #888ea8;
 font-size: 16px;
 margin-left: 10px;
`

export const User = styled.div `
 display: flex;
 align-items: center;
`
User.Img = styled.img`
 width: 40px;
 height: 40px;
 border-radius: 50%;
`
