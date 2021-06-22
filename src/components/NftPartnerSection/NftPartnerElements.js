import styled from 'styled-components';


export const ParnterContainer = styled.div`
  color: #fff;
  padding: 10px 0 30px;

  @media screen and (max-width: 768px) {
    padding: 0;
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

export const ParnterBox = styled.div`
  display:flex;
  padding: 20px;
  flex-flow: row wrap;
`

export const ParnterWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  flex: 0 0 30%;
  height: 100px;
  align-items:center;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
}
`

export const ParnterImg1 = styled.img`
  height:100px;
  display:block;
  margin:40px auto;

  @media screen and (max-width: 768px) {
    margin-bottom:10px;
  }
`

export const ParnterImg2 = styled.img`
  height:90px;
  display:block;
  margin:50px auto;
  width:320px;

  @media screen and (max-width: 768px) {
    margin-bottom:10px;
    width:80%;
  }
`