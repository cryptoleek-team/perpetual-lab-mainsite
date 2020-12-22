import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 100px 0;
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
  color: #e2c3ff;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const TopLine = styled.p`
  color: black;
  font-size: 18px;
  margin: 50px 0 0 0;
  line-height: 1.5;
  // letter-spacing: 0px;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export const TopLine2 = styled.p`
  font-size: 18px;
  text-align: center;
  margin: 0 0 0 0;
  color: black;
  font-weight: 300;
`

export const Box = styled.div`
  width: 25%;
  padding: 0 35px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  text-align: center;
  display: inline-block;

  img {
    padding: 10px;
    width: 100px; 
  }

  @media (max-width: 768px){
    width: 90%;
  }
`

export const Title = styled.h2`
  text-align: center;
  padding: 0 3.6%;
  font-size: 22px;
  font-weight: 600;
  color: #e2c3ff;
  line-height: 1.5;
  margin: 0 0 8px; 
  letter-spacing: 0; 
`

export const SubTitle = styled.h3`  
  font-size: 18px;
  font-weight: 500;
  color: #000;
  line-height: 1.5;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 20px;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  // line-height: 28px;
  margin: 0 auto;
  text-align: center;
`

export const BoxContent = styled.div`
  text-align: center;
  margin-top: 50px;
  margin:64px 0 0 0 0;
`
