import styled from 'styled-components';

export const SerContent = styled.div`
  color: #fff;
  background: #010606;
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
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
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: #e2c3ff;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`
export const SerWrap = styled.p`
  margin: 50px auto;
  font-size: 18px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin: 30px auto;
  }
`

export const SerRow = styled.div`
  margin: 0px auto;
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 0;
  }
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
`

export const TopLine = styled.p`
  color: #e2c3ff;
  font-size: 22px;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: 1.4;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #e2c3ff; 
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Subtitle = styled.p`
  // max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
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

export const Content = styled.p`
  margin: 0 auto;
  color: #e2c3ff;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`




