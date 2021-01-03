import React, { useRef } from 'react';
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
import img from '../../images/exhange.png';
import img1 from '../../images/investment.png';
import img2 from '../../images/service1.png';
import img3 from '../../images/service2.png';
import img4 from '../../images/service3.png';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const SerSection = ({ id, url, t }) => {
  const typeformEmbed = useRef(null);
  
  const newPage = () => {
    const w=window.open('about:blank');
    w.location.href='https://www.xpdax.com/'
  }

  const openForm = () => {
    typeformEmbed.current.typeform.open();
    console.log(url)
  }

  return (
    <>
      <SerContent id={id}>
      <ReactTypeformEmbed
          popup
          autoOpen={false}
          url={ url } 
          hideHeaders
          hideFooter
          style={{ top: 100 }}
          ref={typeformEmbed}
        />
        <SerWrapper>
          <h1>{t("section3")}</h1>
          <SerWrap>{t("section3SerWrap")}</SerWrap>
          <SerRow imgStart={false} data-aos="fade-in">
            <Column1 left={true}>
              <Text>
                <TopLine>{t("toplineAdd1")}</TopLine>
                <Heading>{t("toplineH")}</Heading>
                <Subtitle>{t("subtitle2")}</Subtitle>
                <BtnWrap left={false}>
                  <Button
                    onClick={newPage}
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
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={true} data-aos="fade-in">
            <Column1 left={false}>
              <Text>
                <TopLine>{t("topline1")}</TopLine>
                <Heading>{t("topline1H")}</Heading>
                <Subtitle>{t("subtitle1")}</Subtitle>
                <BtnWrap left={true}>
                  <Button
                    onClick={openForm}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {t("investBtn")}</Button>
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
