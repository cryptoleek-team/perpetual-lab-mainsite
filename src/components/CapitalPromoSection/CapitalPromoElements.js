import styled from 'styled-components';

export const PromoContainer = styled.div`
  color: #fff;
  background-image: linear-gradient( #220C4A , #8167A5);
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

export const PromoBox = styled.div`
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px) {
    max-width:90%;
  }
}
`

export const PromoTitle = styled.h2`
    color: #fff;
    font-size: 25px;
    text-align:center;
    margin:5px;

    @media screen and (max-width: 768px) {
    font-size:20px;
    }

`