import styled from 'styled-components';

export const NewsContainer = styled.div`
  z-index: 11;
  margin-bottom:30px;

  @media screen and (max-width: 480px) {
    padding: 20px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 75%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px) {
    max-width:90%;
  }
}
`

export const NewsHeading = styled.h2`
  margin-bottom: 30px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #592e94;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const NewsBox = styled.div`
    padding: 10px;
    border: 1px solid #f7f8f9;
    margin-top:30px;
    color: #070808;
    flex: 0 0 28%;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
`


export const NewsContent = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media screen and (max-width: 768px) {
        flex-direction:column;
    }
`

export const NewsCol1 = styled.div`
  display:flex;
  justify-content:center;

  @media screen and (max-width: 768px) {
    width:100%;
  }
`

export const NewsCol2 = styled.div`
  width:60%;

  @media screen and (max-width: 768px) {
    width:100%;
  }
`

export const NewsImg = styled.img`
  width:500px;
  margin:5px;
  cursor:pointer;

  @media screen and (max-width: 768px) {
    width:100%;
    margin-bottom:10px;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1440px) {
    width:300px;
  }


  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
}
`

export const NewsListTitle = styled.h3`
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #592e94;
    text-align: left;
    cursor:pointer;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        text-decoration: underline;
    }


`
export const NewsListDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 15px auto;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const NewsListBottom = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

  @media screen and (max-width: 1440px) {
    flex-direction:column;
    align-items:start;
}
`

export const NewsTag = styled.span`
  background:#e2c3ff;
  color:#010606;
  font-size: 18px;
  font-weight: 300;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius:5px;
  padding: 3px 15px;
  margin-right:5px;
  margin-bottom:5px;
  display:inline-block;
  word-wrap:break-word;
`

export const NewsSource = styled.div`
    font-size: 16px;
    font-weight: 300;
    color: #000;
    margin-top:15px;
    text-align:left;

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`

export const NewsTagContainer = styled.div`
    width:50%;

    @media screen and (max-width: 1440px) {
      width:100%
    }

`
