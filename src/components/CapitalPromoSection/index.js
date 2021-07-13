import React from 'react';
import {
    PromoContainer,
    PromoTitle,
    PromoBox
} from "./CapitalPromoElements"

const CapitalPromoSection = ({ t }) => {
    return (
        <PromoContainer>
            <PromoBox data-aos="fade-in">
                <PromoTitle>{t('capitalPromoDesc')}</PromoTitle>
            </PromoBox>
        </PromoContainer>
    )
}

export default CapitalPromoSection;