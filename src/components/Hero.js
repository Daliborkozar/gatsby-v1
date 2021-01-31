import React from 'react'
import styled from 'styled-components'
import {Button} from '../components/Button'
import Video from '../assets/video/backvideo.mp4'

const Hero = () => {
    return (
        <HeroContainer>  
            <HeroBg>
                <VideoBg src={Video} type="video/mpg" autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Brzo i efikasno rešenje za vlagu</HeroH1>
                    <HeroP>Vrhunske mašine za isušivanje vlage</HeroP>
                    <Button primary="true" big="true" to="/isusivaci">Saznaj više</Button>
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
    height: 100vh;
    align-items: center;
    position: relative;
    margin-top: -80px;

    :before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left:0;
        z-index: 2;
        background:linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100% );
        

    }
`


const HeroBg = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const HeroContent = styled.div`
    position: absolute;
    z-index: 1200;
    width: calc( (100vw - 2rem) /2 );
 `
const HeroH1= styled.h1`
    font-size: clamp(1.5rem, 6vw, 3rem);
    margin-bottom: 1.5rem;
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;
    color: #fff;
    line-height: 1.5;
    font-weight: bold;
`
const HeroP= styled.p`
    font-size: clamp(1rem, 3vw, 2rem); 
    margin-bottom: 2rem;
    font-weight: 300;
`