import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDescription>
          <h1>Isusivaci</h1>
          <p>Nemacki Kvalitet za najbolju mogucu uslugu, 100% garancija</p>
        </FooterDescription>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Kontaktirajte nas</FooterLinkTitle>
          <FooterLink to="/about">Kontakt</FooterLink>
          <FooterLink to="/masine">Masine</FooterLink>
          <FooterLink to="/contact">Blog</FooterLink>
          <FooterLink to="/blog">Kontakt</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkTitle>Drustvene mreze</FooterLinkTitle>
        <FooterLink to="/about">Instagram</FooterLink>
        <FooterLink to="/masine">Facebook</FooterLink>
        <FooterLink to="/contact">Youtube</FooterLink>
        <FooterLink to="/blog">Twitter</FooterLink>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #0f3456;
  padding: 3rem 2rem;
  color: white;
  flex-flow: wrap;
`
const FooterLinksWrapper = styled.div`
  padding: 0 1rem;
  flex: 1 1 25rem;
  margin-bottom: 1rem;
`
const FooterLinkItems = styled.div`
  
`
const FooterLink = styled.div`
  font-size: 1rem;
`
const FooterDescription = styled.div``
const FooterLinkTitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`
