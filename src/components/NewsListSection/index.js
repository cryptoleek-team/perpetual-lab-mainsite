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
    NewsTagContainer,
    NewsCol1,
    NewsCol2
} from "./NewsListElements"

import NewsAutocomplete from "../NewsAutocomplete"

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

                <div data-aos="fade-down">
                    {
                        newsList.length > 0 ? newsList.map((item, index) => (
                            <NewsBox key={index}>
                                <NewsContent >
                                    <NewsCol1>
                                        <NewsImg src={item.image_url} onClick={() => newPage(item.news_url)}></NewsImg>
                                    </NewsCol1>

                                    <NewsCol2>
                                        <NewsListTitle onClick={() => newPage(item.news_url)}>{item.title}</NewsListTitle>
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
                                    </NewsCol2>
                                </NewsContent>
                            </NewsBox>
                        )) : "Loading..."
                    }
                </div>
            </TextWrapper>
        </NewsContainer>
    )
}

export default NewsListSection
