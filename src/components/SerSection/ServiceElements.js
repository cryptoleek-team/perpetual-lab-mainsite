import styled from 'styled-components';

export const SerContent = styled.div`
  color: #fff;
  background: #010606;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`  

export const SerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height; 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding; 0 24px;
  justify-content: center;

  h1 {
    margin: 50px auto 0 auto;
    font-size: 35px;
    color: #01bf71;
    font-weight: 700;
    padding-bottom: 15px;

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }

  p {
    margin: 10px auto 40px auto;
    font-size: 20px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`

export const SerRow = styled.div`
  margin: 30px auto;
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col2 col2' 'col1 col1';
  }
  // ${({imgStart}) => (imgStart ? `'col2 col2' 'col1 col1'` : `'col1 col1' 'col2 col2'`)};
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  // @media screen and (max-width: 480px) {
  //   font-size: 32px;
  // }   

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  img {
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
  }
`



