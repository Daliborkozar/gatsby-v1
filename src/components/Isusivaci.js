import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Button } from "./Button"


const Isusivaci = () => {
  const data = useStaticQuery(graphql`
    {
      allModeliIsusivacaJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getMasines = data => {
    const arr = []
    data.allModeliIsusivacaJson.edges.forEach((item, index) => {
      arr.push(
        <ProductCard key={index}>
          <Img
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button to="/">{item.node.button}</Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return arr
  }

  return (
    <IsusivaciCointainer>
      <IsusivaciHeading>Modeli Isušivača</IsusivaciHeading>
      <ProizvodiWrapper>{getMasines(data)}</ProizvodiWrapper>
    </IsusivaciCointainer>
  )
}

export default Isusivaci

const IsusivaciCointainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: blue;
`
const IsusivaciHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #000;
`

const ProizvodiWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ProductInfo = styled.div`
    display:flex;
    flex-direction: column;
    margin: 1rem 1rem;
    align-items: center;   
`
const TextWrap = styled.div`
    margin-bottom:1rem;
`
const ProductTitle = styled.div``
const ProductCard = styled.div`
    width: 35vw;
    min-width: 350px;
    padding: 1rem 2rem;
`
