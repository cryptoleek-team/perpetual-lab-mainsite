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
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 80%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction:row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding:10px;
    margin-top:90px;
  }
}
`

export const HeroBox1 = styled.div`
  width:50%;
  display:flex;
  align-items:center;

  @media screen and (max-width: 768px) {
    width:100%;
  }
`

export const HeroBox2 = styled.div`
  width:50%;
  margin-left:30px;

  @media screen and (max-width: 768px) {
    width:100%;
    margin-top:20px;
    margin-left:0;
  }
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: left;
  display:flex;
  align-items:center;

  @media screen and (max-width: 768px) {
    font-size:25px;
    text-align:center;
  }
`

export const HeroP =styled.p`
  color: #fff;
  font-size: 20px;
  text-align: left;
  line-height: 1.5;
  font-weight: 300;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 10px;
    text-align:center;
  }
`