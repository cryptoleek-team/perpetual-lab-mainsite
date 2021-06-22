import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  overflow: hidden; 

  @media screen and (min-height: 800px) {
    height: 900px;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
`

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity:0.5;
  position:relative;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 80%;
  padding: 50px;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding:10px;
    margin-top:90px;
  }
}
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 70px;
  text-align: center;
  margin-bottom:50px;
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`

export const HeroP =styled.p`
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
  font-weight: 300;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
    text-align:center;
  }
`

export const HeroLine = styled.hr`
    width: 16%;
    color: #fff;
    border-width: 2px;
    border-style:solid;
    display:block;
    margin:auto;
`