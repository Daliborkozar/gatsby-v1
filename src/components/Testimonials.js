import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <TopLine>
                Iskustva naših klijenata 
            </TopLine>
            <Description>
                ŠTA DRUGI KAŽU
            </Description>
            <ContentWrapper>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Milovan Kovacevic</h3>
                        <p>Morao sam se rešiti vlage da bi nastavio radove u kući, odradio sam odličan posao iznajmljivanjem profesionalnih mašina a i saveti su mi bili zlata vredni uštedeo sam i pare i vreme, svaka čast samo tako nastavite.</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb/>
                        <h3>Draško Jovović</h3>
                        <p>Imao sam ogromnu vlagu posle silnih kiša, rešio sam problem za nekoliko dana, nemačke mašine su odradile solidan posao</p>
                    </Testimonial>
            </ContentWrapper>
        </TestimonialsContainer> 
    )
}

export default Testimonials


const TestimonialsContainer = styled.div`
    width:100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw-1300px)/2);
    height:100%;
    text-align: center;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 2rem;
    text-align: center;
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
        }
`
const Description= styled.p`
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 400;
`
const TopLine = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding: 2rem 2rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
    margin-top: 5rem;
`

const Testimonial = styled.div`
    padding: 2rem 5rem;  

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
        
    } 
    p{
        color: #3b3b3b;
    }
`

// const ColumnOne = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr; 
// `
// const ColumnTwo = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     margin-top: 2rem;
//     grid-gap: 10px;

//     @media screen and (max-width: 500px ){
//         grid-template-columns: 1fr;
//     }
// `

// const Images = styled(Img)`
//     border-radius: 10px;

// `
