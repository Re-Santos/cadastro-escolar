import React from "react"
import{HeaderStyle} from './headerStyle'
import logo from '../../../public/logo.jpg'

const Header = () => {
  return (
  <>
    
    <HeaderStyle>
      <img src= {logo} alt="Logo da escola" />
      <h1>ESCOLA X</h1>
    </HeaderStyle>
  </>
  )
}

export default Header
