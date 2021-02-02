import React from "react"
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDescription>
          <h1>Isusivaci</h1>
          <p>Nemacki Kvalitet za najbolju mogucu uslugu, 100% garancija</p>
        </FooterDescription>
        <FooterLinkItems>
          <FooterLinkTitle>Kontaktirajte nas</FooterLinkTitle>
          <FooterLink to="/about">Kontakt</FooterLink>
          <FooterLink to="/masine">Masine</FooterLink>
          <FooterLink to="/contact"></FooterLink>
          <FooterLink to="/blog">Kontakt</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Isusivaci</FooterLinkTitle>
          <FooterLink to="/about">Modeli</FooterLink>
          <FooterLink to="/masine">Masine</FooterLink>
          <FooterLink to="/contact">Informacije</FooterLink>
          <FooterLink to="/blog">Performanse</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Drustvene mreze</FooterLinkTitle>
          <FooterLink to="/about">Instagram</FooterLink>
          <FooterLink to="/masine">Facebook</FooterLink>
          <FooterLink to="/contact">Youtube</FooterLink>
          <FooterLink to="/blog">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer


const FooterContainer = styled.div``