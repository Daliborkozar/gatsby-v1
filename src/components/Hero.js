import React from 'react'
import styled from 'styled-components'
import {Button} from '../components/Button'

const Hero = () => {
    return (
        <HeroContainer>  
            
            <HeroContent>
                <HeroItems>
                    <HeroH1>Brzo i efikasno resenje za vlagu</HeroH1>
                    <HeroP>Vrhunske masine za isusivanje vlage</HeroP>
                    <Button>Iznajmi</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background-image: url("https://www.rovex-grejanje.com/folder/trotec/TTK/TTK170-00.jpg");
    display: flex;
    justify-content: center;
    height: 500px;
    background-repeat: no-repeat, repeat;
    background-position: center top;
    background-size: cover;
    
    
`
const HeroBg = styled.div`

`
const Img = styled.img`
    width: 100%;
    
`

const HeroContent = styled.div``
const HeroH1= styled.h1``
const HeroP= styled.p``
const HeroItems = styled.div``