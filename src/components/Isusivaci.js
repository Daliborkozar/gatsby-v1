import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql} from 'gatsby'


const Isusivaci = () => {
    return (
        <IsusivaciCointainer>
            <IsusivaciHeading>Modeli Isušivača</IsusivaciHeading>
            <ProizvodiWrapper>wrapper</ProizvodiWrapper> 
        </IsusivaciCointainer>
    )
}

export default Isusivaci

const IsusivaciCointainer=styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    background: #fff;
    color: blue;
`
const IsusivaciHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProizvodiWrapper= styled.div`
    display: flex;
`

