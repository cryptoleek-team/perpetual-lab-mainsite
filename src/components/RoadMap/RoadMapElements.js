import styled from 'styled-components';

export const RoadContent = styled.div` 
  color: #f9f9f9;
  padding: 100px 0;
	display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
  
  h1 {
    text-align: center;
    padding: 30px auto;
    color: #01BF71;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

export const Circle = styled.span`
  background-color: #fff;
  border: 3px solid #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 1;
  text-align: center;
  margin: 68px auto 0 auto;

  @media screen and (max-width: 768px) {
    margin: 40px auto 0 auto;
  }
`

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin: 20px 0 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin: -10px 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
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
    left: calc(50%);
    width: 2px;
    height: 180%;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: -20px 0;
  width: 50%;

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
  margin: -10px -20px;

  &.left {
    align-items: flex-end;
    margin: -10px 20px;
  }

  @media screen and (max-width: 768px) {
    &.left {
      align-items: flex-start;
      margin: -10px -20px;
    }
  }
}
`

export const Road = styled.h1`
  margin: 0 auto;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
}
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0 0;
  max-width: 250px;
  position: relative;
  color: #000;

  &.alignRight{
    text-align:right;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`