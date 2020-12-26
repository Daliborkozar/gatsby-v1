import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { FaBars } from  "react-icons/fa"


const Header = () => {
  return (
  <Nav>
    <NavLink to="/">
      ISUSIVACI VLAGE
    </NavLink>
    <Bars />
  </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
`
const NavLink = styled(Link)`
  text-decoration: none;  
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-left: 1.5rem;
  justify-content: space-between;
`

const Bars = styled(FaBars)`
  display:none;
  color: #FFF;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 0.5rem;
    position: absolute;
    font-size: 2.4rem;
    top: 0;
    right: 0;
    transform: translate(-30%, 60%);
    cursor: pointer;
  }
`