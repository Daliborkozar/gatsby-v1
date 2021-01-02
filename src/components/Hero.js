import React from 'react'
import styled from 'styled-components'
import {Button} from '../components/Button'

const Hero = () => {
    return (
        <HeroContainer>  
            <HeroBg>
                <Img src="https://www.rovex-grejanje.com/folder/trotec/TTK/TTK170-00.jpg"/>
            </HeroBg>
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
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    
    
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