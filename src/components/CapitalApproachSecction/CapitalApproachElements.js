import styled from "styled-components";

export const ApproachContainer = styled.div`
  z-index: 11;
  padding-top: 100px;

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`

export const ApproachWrapper = styled.div`
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px) {
    max-width:90%;
  }
}
`

export const ApproachHeading = styled.h2`
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
export const ApproachDescription = styled.p`
  color: black;
  font-size: 18px;
  margin-top: 30px;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const ApproachBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content:center;
    text-align:center;
`

export const ApproachCol = styled.div`
    flex: 0 0 28%;
    margin:20px;

    @media screen and (max-width:768px){
        flex: 0 0 100%;
        margin:0;
    }
`

export const ChallengeHeading = styled.h3`
  font-size: 23px;
  line-height: 1.1;
  font-weight: 600;
  color: #592e94;
  text-align: center;
  margin-top:20px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`

export const Card = styled.div`
    width:100%;
    height:200px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const CardImgContainer = styled.div`
    width:80px;
    height:80px;
    background-color:#f0f0f5;
    border-radius:20px;
    position:relative;
`

export const CardImg = styled.img`
    position:absolute;
    width:60px;
    height:60px;
    top:10px;
    left:10px;
`



export const CardTitle1 = styled.h4`
    color: black;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    text-align: left;

    @media screen and (max-width: 1440px) {
        font-size: 18px;
    }

`

export const CardTitle2 = styled.h4`
    color: black;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    text-align: right;

    @media screen and (max-width: 1440px) {
        font-size: 18px;
    }

`

export const CardDesc1 = styled.p`
    color: black;
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
    font-weight: 300;
    margin-top:10px;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }

`

export const CardDesc2 = styled.p`
    color: black;
    font-size: 18px;
    line-height: 1.5;
    text-align: right;
    font-weight: 300;
    margin-top:10px;

    @media screen and (max-width: 1440px) {
        font-size: 16px;
    }

`