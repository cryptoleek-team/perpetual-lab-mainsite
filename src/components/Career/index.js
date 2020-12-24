import React from 'react';
import {
  SerContent,
  SerWrapper,
  SerWrap,
  SerRow,
  Column1,
  Column2,
  Text,
  Content,
  Heading,
  Subtitle,
  ImgWrap
} from './CareerElements';
import img1 from '../../images/service.png';

const Career = ({ id, t }) => {
  return (
    <SerContent id={id}>
      <SerWrapper>
        <h1>{t("join")}</h1>
        <SerWrap >{t("joinSerwrap")}</SerWrap>
        <SerRow imgStart={true}>
          <Column1>
            <Text>
              <Heading>{t("whyJoinUs")}</Heading>
              <Subtitle>{t("whyJoinUsDesc")}</Subtitle>
            </Text>
          </Column1>
          <Column2>
            <ImgWrap>
              <img src={img1} alt='' />
            </ImgWrap>
          </Column2>
        </SerRow>
        <Content>{t("joinUsNow")}</Content>
      </SerWrapper>
    </SerContent>
  )
}

export default Career
