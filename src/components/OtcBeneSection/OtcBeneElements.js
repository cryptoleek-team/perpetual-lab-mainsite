import styled from "styled-components";

export const BeneContainer = styled.div`
  z-index: 11;
  padding: 100px 0;

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`

export const BeneWrapper = styled.div`
  max-width: 75%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px) {
    max-width:90%;
  }
}
`

export const BeneHeading = styled.h2`
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

export const BeneBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items:start;
    justify-content:center;
    margin-top:50px;
`

export const BeneCard = styled.div`
    flex: 0 0 20%;
    background-color: #fff;
    margin:20px;
    height:100%;
    
    @media screen and (min-device-width: 768px) and (max-device-width: 1440px) {
        flex: 0 0 40%;
    }

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
    }
`

export const BeneImgContainer = styled.div`
    width:100%;
    height:200px;
    background-color:#f0f0f5;
    border-radius:20px;
    display: flex;
`

export const BeneImg = styled.img`
    width:120px;
    height:120px;
    display: block;
    margin:auto;
`

export const BeneTitle = styled.h3`
    margin:20px 0;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #592e94;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`

export const BeneDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 0 auto;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`