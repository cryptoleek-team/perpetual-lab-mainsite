import React from "react";

import {
    InsightContainer,
    InsightWrapper,
    InsightHeading,
    CardBox,
    Card,
    CardImg,
    CardTitle,
    CardDesc
} from './CapitalInsightElement'

import {Button} from "../ButtonElements"

import insight1 from "../../images/insight1-min.jpeg"
import insight2 from "../../images/insight2-min.jpeg"
import insight3 from "../../images/insight3-min.jpeg"

const CapitalInsightSection = ({t})=>{
    return (
        <InsightContainer>
            <InsightWrapper>
                <InsightHeading>{t("capitalInsightTitle")}</InsightHeading>
                <div>
                    <CardBox>
                        <Card>
                            <CardImg src={insight1} alt="insight 1"></CardImg>
                            <CardTitle>{t("capitalInsightSubTitle1")}</CardTitle>
                            <CardDesc>{t("capitalInsightDesc1")}</CardDesc>
                            <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={1}
                                dark={1}
                            >{t("moreBtn")}</Button>
                        </Card>
                        <Card>
                            <CardImg src={insight2} alt="insight 2"></CardImg>
                            <CardTitle>{t("capitalInsightSubTitle2")}</CardTitle>
                            <CardDesc>{t("capitalInsightDesc2")}</CardDesc>
                            <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={1}
                                dark={1}
                            >{t("moreBtn")}</Button>
                        </Card>
                        <Card>
                            <CardImg src={insight3} alt="insight 3"></CardImg>
                            <CardTitle>{t("capitalInsightSubTitle3")}</CardTitle>
                            <CardDesc>{t("capitalInsightDesc3")}</CardDesc>
                            <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={1}
                                dark={1}
                            >{t("moreBtn")}</Button>
                        </Card>
                    </CardBox>
                </div>
            </InsightWrapper>
        </InsightContainer>
    )
}

export default CapitalInsightSection