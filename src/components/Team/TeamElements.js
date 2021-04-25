import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 30px 0;
`

export const TextWrapper = styled.div`
  max-width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
`

export const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #592e94;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`
export const TopLine = styled.p`
  color: black;
  font-size: 18px;
  margin: 50px 150px;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin: 30px auto;
  }
`

export const AdvisorContainer = styled.div`
  width:80%;
  display: flex;
  flex-flow: row wrap;
  align-items:start;
  justify-content:space-around;
  margin:auto;
`

export const AdvisorBox = styled.div`
    flex: 0 0 40%;

    @media screen and (max-width: 768px) {
      margin-top:20px;
      flex: 0 0 100%;
    }
`

export const AdvisorName = styled.h3`
  text-align: left;
  font-size: 22px;
  font-weight: 500;
  color: #592e94;
  line-height: 1.5;
  margin: 0 0 8px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const AdvisorImg = styled.img`
  width:130px;
  height:160px;
  margin-right:20px;
  float: left;
  
  @media screen and (max-width: 768px) {
    margin-right:10px;
}
`

export const AdvisorDesc = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #000;
    margin: 0 auto;
    text-align:justify;
    

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top:10px;
    }
`

