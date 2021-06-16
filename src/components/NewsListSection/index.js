import React, { useState, useEffect } from "react"
import { getNewsData } from '../../api/index';
import {
    NewsContainer,
    TextWrapper,
    NewsHeading,
    NewsBox,
    NewsContent,
    NewsImg,
    NewsListTitle,
    NewsListDesc,
    NewsListBottom,
    NewsTag,
    NewsSource,
    NewsTagContainer
} from "./NewsListElements"

import NewsAutocomplete from "../NewsAutocomplete"

import sample from "../../images/sample.jpg"

const NewsListSection = ({ t }) => {
    const [newsList, setNewsList] = useState([]);
    const [ticker, setTicker] = useState("BTC");

    useEffect(() => {
        let mounted = true;
        getNewsData(ticker).then(items => {
            if (mounted) {
                setNewsList(items)
            }
        })
        return () => mounted = false;
    }, [ticker])

    const newPage = (url) => {
        const w = window.open('about:blank');
        w.location.href = url;
    }

    return (
        <NewsContainer>
            <TextWrapper>
                <NewsHeading>{t("newsHeading")}</NewsHeading>
                <NewsAutocomplete setTicker={setTicker}></NewsAutocomplete>

                {/* <NewsBox>
                    {
                        newsList.length > 0 ? newsList.map((item, index) => (
                            <NewsContent key={index}>
                                <NewsImg src={item.image_url} onClick={()=>newPage(item.news_url)}></NewsImg>
                                <div>
                                    <NewsListTitle onClick={()=>newPage(item.news_url)}>{item.title}</NewsListTitle>
                                    <NewsListDesc>{item.text}</NewsListDesc>
                                    <NewsListBottom>
                                        <NewsTagContainer>
                                            {
                                                item.tickers.map((ticker, i) => (
                                                    <NewsTag key={i}>{ticker}</NewsTag>
                                                ))
                                            }
                                        </NewsTagContainer>
                                        <NewsSource> - {item.source_name} | {item.date}</NewsSource>
                                    </NewsListBottom>
                                </div>
                            </NewsContent>
                        )) : "Loading..."
                    }
                </NewsBox> */}

                <NewsBox data-aos="fade-down">
                    <NewsContent>
                        <NewsImg src={sample}></NewsImg>
                        <div>
                            <NewsListTitle>
                                Michael Saylor is not just a Bitcoin maximalist: ‘There's a place for everybody'</NewsListTitle>
                            <NewsListDesc>The MicroStrategy CEO sees Ethereum as a serious competitor to the financial industry.</NewsListDesc>
                            <NewsListBottom>
                                <NewsTagContainer>
                                    <NewsTag>USDT</NewsTag>
                                    <NewsTag>USDT</NewsTag>
                                    <NewsTag>USDT</NewsTag>
                                    <NewsTag>BTC</NewsTag>
                                    <NewsTag>BTC</NewsTag>
                                    <NewsTag>BTC</NewsTag>
                                    <NewsTag>BTC</NewsTag>
                                    <NewsTag>BTC</NewsTag>
                                </NewsTagContainer>
                                <NewsSource> - Cointelegraph | Wed, 16 Jun 2021 01:42:00 -0400</NewsSource>
                            </NewsListBottom>
                        </div>
                    </NewsContent>
                </NewsBox>
            </TextWrapper>
        </NewsContainer>
    )
}

export default NewsListSection
