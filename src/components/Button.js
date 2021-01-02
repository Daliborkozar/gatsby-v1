import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? "#2752E7" : "#077BF1")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "16px 40px" : "10px 32px")};
    color: #fff;
    font-size: ${({big}) => (big ? "20px" : "16px")};
    outline: none;
    border: none;
    text-decoration: none;
    transition: 0.3s;
    border-radius: 50px;
    letter-spacing: 0.1rem;

    &:hover {
        background: ${({ primary }) => (primary ? "#077BF1" : "#2752E7")};
        transform: translateY(-2px); 
    }
`
