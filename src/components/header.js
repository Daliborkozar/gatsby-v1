import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { FaBars} from  "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from '../components/Button'


const Header = () => {
  return (
  <Nav>
    <NavLink to="/">
      ISUSIVACI VLAGE
    </NavLink>
    <Bars />
    <NavMenu>
      {menuData.map((item, index) => {
        return (
        <NavLink to={item.link} key={index}>
          {item.title}
        </NavLink>
        )
      })}
    </NavMenu>
    <NavBtn>
      <Button primary="true" to='/isusivaci'>Iznajmi Isusivac</Button>
    </NavBtn>
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media screen and (max-width: 768px){
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`