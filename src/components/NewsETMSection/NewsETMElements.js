import styled from 'styled-components';

export const NewsContainer = styled.div`
  z-index: 11;
  padding: 100px 0;

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
    display: table;
    width: 80%;
    border-collapse:separate;
    border-spacing:30px;
    margin:20px auto;

    @media screen and (max-width: 768px) {
        border-collapse:initial;
        border-spacing:0px;
        margin:0px;
        width: 100%;
    }
`

export const NewsCard = styled.div`
    padding: 30px;
    margin: 25px;
    border: 1px solid #f7f8f9;
    color: #070808;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    position:relative;
    width:50%;
    display: table-cell;

    @media screen and (max-width: 768px) {
      display:block;
      width:100%;
      margin:30px 0 80px 0;
    }
`

export const NewsImgCointainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
    justify-content:center;
`

export const NewsImg = styled.img`
  width:100%;
  height:300px;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
}
`

export const TitleBox = styled.div`
  text-align: center;
  vertical-align:top;

  img {
    padding: 10px;
    width: 80px; 
  }

  @media (max-width: 768px){
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 0;
  }
`

export const NewsListTitle = styled.h3`
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #592e94;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 20px;
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

export const NewsSource = styled.div`
    font-size: 16px;
    font-weight: 300;
    color: #000;
    text-align:left;

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`

export const IconContainer = styled.div`
    display:flex;
    margin-top:10px;
    align-items:center;
`

export const Icon = styled.div`
    color:#592e94;
    font-size:18px;
    align-items:center;
    display:flex;
    margin-right:10px;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
`

export const LongNewsBox = styled.div`
    padding: 30px;
    border: 1px solid #f7f8f9;
    color: #070808;
    flex: 0 0 28%;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    max-width:80%;
    margin:20px auto;
`

export const LongNewsImg = styled.img`
  width:500px;
  margin-right:15px;
  cursor:pointer;
  float:left;

  @media screen and (max-width: 768px) {
    width:100%;
    margin-bottom:10px;
    margin-right:0px;
    float:none;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1440px) {
    width:300px;
  }


  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
}
`