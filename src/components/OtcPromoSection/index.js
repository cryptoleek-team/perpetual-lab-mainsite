import React from 'react';

import {
    PromoContainer,
    PromoBox,
    PromoWrapper,
    PromoTitle,
    PromoDesc
} from './OtcPromoElments'

const OtcPromoSection = ({ t }) => {
    return (
        <PromoContainer>
            <PromoBox>
                <PromoWrapper data-aos="fade-right">
                    <PromoTitle>{t('otcPromoSubTitle1')}</PromoTitle>
                    <PromoDesc>{t('otcPromoDesc1')}</PromoDesc>
                </PromoWrapper>

                <PromoWrapper data-aos="fade-left">
                    <PromoTitle>{t('otcPromoSubTitle2')}</PromoTitle>
                    <PromoDesc>{t('otcPromoDesc2')}</PromoDesc>
                </PromoWrapper>
            </PromoBox>
        </PromoContainer>
    )
}

export default OtcPromoSection