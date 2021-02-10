import { Link } from "gatsby"
import React,{useState} from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "../components/Button"

const Header = () => {
  const [nav, showNav] = useState(true)

  const hamburgerHandler = (e) => {
    e.preventDefault()
     showNav(!nav)
   }

  return (
    <Nav onClick={hamburgerHandler}>
      <NavLink to="/">ISUŠIVACI VLAGE</NavLink>
      <Bars  />
      
      <NavMenu nav={nav}>
        {menuData.map((item, index) => {
          return (
            <NavLink  to={item.link} key={index}>
              {item.title}
            </NavLink>
          )
        })}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/isusivaci">
          Iznajmi Isušivač
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header



const Nav = styled.nav`
  background: transparent;
  background-color: blue;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  
  
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
  z-index: 1000;
  
  
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 5000;
  }

`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  @media screen and (max-width: 850px) {
    position: fixed;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    align-items: center;
    justify-items: center;
    background: black;
    font-size: 3rem;
    width: 100%;
    height: 100vh;
    z-index: 3000;
    left: ${props => (props.nav ? '-100%' : '0')}
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  z-index: 1000;
  @media screen and (max-width: 850px) {
    display: none;
  }
  
`
