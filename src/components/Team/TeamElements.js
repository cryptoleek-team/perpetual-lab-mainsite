import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding-bottom:50px;
`

export const TextWrapper = styled.div`
  max-width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top:50px;
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
      text-align:center;
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
    text-align:center;
  }
`

export const AdvisorImg = styled.img`
  width:200px;
  height:300px;
  margin-right:20px;
  float: left;
  cursor:pointer;
  
  @media screen and (max-width: 768px) {
    margin-right:10px;
    float:none;
}
`

export const TeamImg = styled.img`
  width:230px;
  height:300px;
  margin-right:20px;
  float: left;
  cursor:pointer;
  
  @media screen and (max-width: 768px) {
    margin-right:0px;
    float:none;
    display: block;
    margin: 0 auto;
}
`

export const AdvisorCertImg = styled.img`
  width:30%;
  height:80%;
  
  @media screen and (max-width: 768px) {
    width:70%;
    height:60%;
}
`
export const AdvisorDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 0 auto;
  text-align: left;

@media screen and(max-width: 768px) {
  font-size: 16px;
  margin-top: 10px;
  
}
`

export const ConversationImg = styled.img`
  margin-top:40px;
  margin-bottom:20px;
  width:100%;
  height:350px;

  @media screen and (max-width: 768px) {
     margin-top:20px;
     margin-bottom:0px;
     height:200px;
  }
`

