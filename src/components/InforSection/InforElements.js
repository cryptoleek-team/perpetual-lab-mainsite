import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding:50px 0;

  @media screen and (max-width: 480px) {
    padding-bottom:0px;
  }
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

export const InfoImg = styled.img`
    padding: 10px;
    width: 100px; 
`

export const Title = styled.h2`
  text-align: center;
  padding: 0 3.6%;
  font-size: 22px;
  font-weight: 500;
  color: #592e94;
  margin: 0 0 8px; 
  letter-spacing: 0;
  height:70px;

  @media screen and (max-width: 768px) {
    height:55px;
    font-size: 18px;
  }

  @media screen and (min-width:769px) and (max-width:2000px) {
    font-size: 18px;
  }
`

export const SubTitle = styled.h3`  
  font-size: 18px;
  font-weight: 500;
  color: #000;
  line-height: 1.5;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const BoxContent = styled.div`
  text-align: center;
  margin:50px 0 0 0;

  @media (max-width: 768px){
    margin:30px 0 0 0;
  }
`
