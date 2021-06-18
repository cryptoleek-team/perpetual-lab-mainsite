import React from "react"
import {
    NewsContainer,
    TextWrapper,
    NewsHeading,
    NewsBox,
    NewsCard,
    NewsImg,
    NewsListTitle,
    NewsListDesc,
    NewsSource,
    NewsImgCointainer,
    TitleBox,
    IconContainer,
    Icon
} from "./NewsETMElements"

import logo from '../../images/ETM01.png';
import etmNews1 from "../../images/etm-news1.jpg"
import etmNews2 from "../../images/etm-news2.jpg"
import { IoLocationOutline, IoCalendarOutline } from 'react-icons/io5';

const NewsETMSection = ({ t }) => {
    return (
        <NewsContainer>
            <TextWrapper>
                <TitleBox>
                    <img src={logo} alt="logo"></img>
                    <NewsHeading>{t("newsETMHeading")}</NewsHeading>
                </TitleBox>

                <NewsBox data-aos="fade-down">
                    <NewsCard>
                        <NewsImgCointainer>
                            <NewsImg src={etmNews1} alt=""></NewsImg>
                        </NewsImgCointainer>
                        <NewsListTitle>{t("newsETMTitle1")}</NewsListTitle>
                        <NewsListDesc>{t("newsETMDesc1")}</NewsListDesc>
                        <hr/>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <IconContainer>
                                <Icon>
                                    <IoLocationOutline></IoLocationOutline>
                                </Icon>
                                <NewsSource>{t("newsETMLoc1")}</NewsSource>
                            </IconContainer>

                            <IconContainer>
                                <Icon>
                                    <IoCalendarOutline></IoCalendarOutline>
                                </Icon>
                                <NewsSource>{t("newsETMDate1")}</NewsSource>
                            </IconContainer>
                        </div>
                    </NewsCard>

                    <NewsCard>
                        <NewsImgCointainer>
                            <NewsImg src={etmNews2} alt=""></NewsImg>
                        </NewsImgCointainer>
                        <NewsListTitle>{t("newsETMTitle2")}</NewsListTitle>
                        <NewsListDesc>{t("newsETMDesc2")}</NewsListDesc>
                        <hr/>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <IconContainer>
                                <Icon>
                                    <IoLocationOutline></IoLocationOutline>
                                </Icon>
                                <NewsSource>{t("newsETMLoc2")}</NewsSource>
                            </IconContainer>

                            <IconContainer>
                                <Icon>
                                    <IoCalendarOutline></IoCalendarOutline>
                                </Icon>
                                <NewsSource>{t("newsETMDate2")}</NewsSource>
                            </IconContainer>
                        </div>
                    </NewsCard>
                </NewsBox>
            </TextWrapper>
        </NewsContainer>
    )
}

export default NewsETMSection
