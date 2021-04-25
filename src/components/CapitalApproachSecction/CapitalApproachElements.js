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
    align-items:center;
    flex-direction:row;
    justify-content:center;
    text-align:center;

    @media screen and (max-width:768px){
      flex-direction:column;
  }
`

export const ChallengeHeading = styled.h3`
  font-size: 23px;
  line-height: 1.1;
  font-weight: 600;
  color: #592e94;
  text-align: center;
  margin-top:30px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const MacImgContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

export const MacImg = styled.img`
  width:500px;

  @media screen and (max-width: 480px) {
    width:100%
  }
`

export const ImgText = styled.p`
  color:#FFF;
  position:absolute;
  font-size:30px;
  font-weight:600;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:3;
`