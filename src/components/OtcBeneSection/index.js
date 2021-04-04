import React from 'react';
import {
    BeneContainer,
    BeneWrapper,
    BeneHeading,
    BeneBox,
    BeneCard,
    BeneImgContainer,
    BeneImg,
    BeneDesc,
    BeneTitle
} from './OtcBeneElements'

import bene1 from "../../images/otcbene1.png"
import bene2 from "../../images/otcbene2.png"
import bene3 from "../../images/otcbene3.png"
import bene4 from "../../images/otcbene4.png"

const OtcBeneSection = ({t})=>{
    return(
        <BeneContainer>
            <BeneWrapper>
                <BeneHeading>{t("otcBeneTitle")}</BeneHeading>

                <BeneBox>
                     <BeneCard>
                        <BeneImgContainer>
                            <BeneImg src={bene1}></BeneImg>
                        </BeneImgContainer>
                        <BeneTitle>{t("otcBeneSubtitle1")}</BeneTitle>
                        <BeneDesc>{t("otcBeneDesc1")}</BeneDesc>   
                     </BeneCard>

                     <BeneCard>
                        <BeneImgContainer>
                            <BeneImg src={bene2}></BeneImg>
                        </BeneImgContainer>    
                        <BeneTitle>{t("otcBeneSubtitle2")}</BeneTitle>
                        <BeneDesc>{t("otcBeneDesc2")}</BeneDesc>  
                     </BeneCard>

                     <BeneCard>
                        <BeneImgContainer>
                            <BeneImg src={bene3}></BeneImg>
                        </BeneImgContainer>    
                        <BeneTitle>{t("otcBeneSubtitle3")}</BeneTitle>
                        <BeneDesc>{t("otcBeneDesc3")}</BeneDesc> 
                     </BeneCard>

                     <BeneCard>
                        <BeneImgContainer>
                            <BeneImg src={bene4}></BeneImg>
                        </BeneImgContainer>  

                        <BeneTitle>{t("otcBeneSubtitle4")}</BeneTitle>
                        <BeneDesc>{t("otcBeneDesc4")}</BeneDesc>   
                     </BeneCard>
                </BeneBox>               
            </BeneWrapper>
        </BeneContainer>
    )
}

export default OtcBeneSection


