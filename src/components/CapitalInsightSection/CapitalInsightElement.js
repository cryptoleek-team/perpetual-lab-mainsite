import styled from "styled-components";

export const InsightContainer = styled.div`
  z-index: 11;
  padding: 50px;

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`

export const InsightWrapper = styled.div`
  max-width: 85%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px) {
    max-width:90%;
  }
}
`

export const InsightHeading = styled.h2`
  margin-bottom: 14px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #592e94;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`
export const CardBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items:start;
    justify-content:center;
`

export const Card = styled.div`
    padding: 2em;
    margin: 15px;
    border: 1px solid #f7f8f9;
    color: #070808;
    flex: 0 0 30%;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);

    @media screen and (min-device-width: 768px) and (max-device-width: 1440px) {
        flex: 0 0 28%;
    }

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
    }
`

export const CardImg = styled.img`
    width:100%;
    height:300px;
    
    @media screen and (max-width: 1440px) {
        height:200px;
    }
`

export const CardTitle = styled.h3`
    font-size: 23px;
    line-height: 1.1;
    font-weight: 600;
    color: #592e94;
    text-align: left;
    margin-top:20px;
    height:100px;
    display:flex;
    align-items:start;

    @media screen and (max-width: 1440px) {
        font-size: 20px; 
        height:150px;
    }
`

export const CardDesc = styled.p`
    color: black;
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
    font-weight: 300;
    margin-top:10px;
    margin-bottom:20px;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }
`
