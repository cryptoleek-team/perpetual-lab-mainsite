import styled from 'styled-components'

export const Card = styled.div`
    padding:20px;
    height:200px;
    display:flex;
    justify-content:start;
    align-items:center;
`
export const CardTitle = styled.h4`
    color: black;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    text-align:left;

    @media screen and (max-width: 1440px) {
        font-size: 18px;
    }
`

export const CardDesc = styled.p`
    color: black;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    font-weight: 300;
    margin-top:10px;
    width:100%;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }
`

export const Container = styled.div`
    width:50%;
    @media screen and (max-width: 768px) {
        width:100%;
    }
`
