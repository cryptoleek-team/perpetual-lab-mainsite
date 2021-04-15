import styled from 'styled-components';

export const RoadContent = styled.div` 
  color: #f9f9f9;
  padding: 100px 0;
  
  h1 {
    text-align: center;
    padding: 30px auto;
    color: #592e94;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    padding: 50px 0 100px 0;
  }
`

export const Circle = styled.span`
  background-color: #fff;
  border: 3px solid #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 1;
`

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
  height: ${({ lan }) => (lan ? '180px' : '140px')};
  @media screen and (max-width: 768px) {
    margin: -50px auto;
    height: 230px;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin: 10px 0 10px 0;
  text-align: ${({ position }) => (position ? 'left' : 'right')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: left;
    width: 200px;
  }
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin: -10px 0;


  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: -10px -50px -10px 0;
  }
`

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  :after {
    background-color: #000;
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: ${({ length }) => (length ? '200px' : '130px')};
  }
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: -20px 0;
  width: 50%;
  overflow:hidden;

  &.position {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }

  @media screen and (max-width: 768px) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  width: 800px;
  max-width: 90%;
  text-align:left;
  margin: -10px -20px 0 0;

  &.left {
    align-items: flex-end;
    margin: -10px 20px;
  }

  @media screen and (max-width: 768px) {
    margin: -10px 40px -10px -20px;
    max-width: 430px;

    &.left {
      align-items: flex-start;
      margin: -10px -20px;
    }
  }
}
`

export const Road = styled.h1`
  margin: 0 auto 50px auto;
  font-size: 36px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin: 0 auto 30px auto;
  }
}
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0;
  max-width: 300px;
  position: relative;
  color: #000;
  font-weight: 300;

  &.alignRight{
    text-align:right;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 200px;
    &.alignRight{
      text-align:left;
    }
  }
`