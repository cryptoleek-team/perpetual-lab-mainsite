import React from 'react';
import {
  SerContent,
  SerWrapper,
  SerWrap,
  SerRow,
  Column1,
  Column2,
  Text,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap
} from './ServiceElements'
import { Button } from '../ButtonElements';
import img1 from '../../images/service.png';
import img2 from '../../images/service1.png';
import img3 from '../../images/service2.png';
import img4 from '../../images/service3.png';

const SerSection = ({ id, t }) => {
  return (
    <>
      <SerContent id={id}>
        <SerWrapper>
          <h1>{t("section3")}</h1>
          <SerWrap>{t("section3SerWrap")}</SerWrap>
          <SerRow imgStart={true} data-aos="fade-in">
            <Column1 left={false}>
              <Text>
                <TopLine>{t("topline1")}</TopLine>
                <Heading>{t("topline1H")}</Heading>
                <Subtitle>{t("subtitle1")}</Subtitle>
                <BtnWrap left={true}>
                  <Button
                    href="https://www.xpdax.com/"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {t("startBtn")}</Button>
                </BtnWrap>
              </Text>
            </Column1 >
            <Column2>
              <ImgWrap>
                <img src={img1} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow >
          <SerRow imgStart={false} data-aos="fade-in">
            <Column1 left={true}>
              <Text>
                <TopLine>{t("topline2")}</TopLine>
                <Heading>{t("topline2H")}</Heading>
                <Subtitle>{t("subtitle2")}</Subtitle>
                <BtnWrap left={false}>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {t("soonBtn")}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img2} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={true} data-aos="fade-in">
            <Column1 left={false}>
              <Text>
                <TopLine>{t("topline3")}</TopLine>
                <Heading>{t("topline3H")}</Heading>
                <Subtitle>{t("subtitle3")}</Subtitle>
                <BtnWrap left={true}>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {t("soonBtn")}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img4} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={false} data-aos="fade-in">
            <Column1 left={true}>
              <Text>
                <TopLine>{t("topline4")}</TopLine>
                <Heading>{t("topline4H")}</Heading>
                <Subtitle>{t("subtitle4")}</Subtitle>
                <BtnWrap left={false}>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {t("soonBtn")}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img3} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
        </SerWrapper>
      </SerContent>
    </>
  )
}

export default SerSection;
