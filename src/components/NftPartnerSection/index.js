import React from 'react';

import{
    ParnterContainer,
    ParnterBox,
    ParnterImg1,
    ParnterImg2,
    Heading
} from './NftPartnerElements';

import Grid from '@material-ui/core/Grid';

import nft1 from "../../images/nft-logo1.png"
import nft2 from "../../images/nft-logo2.png"
import nft3 from "../../images/nft-logo3.png"
import nft4 from "../../images/nft-logo4.png"
import nft5 from "../../images/nft-logo5.png"
import nft6 from "../../images/nft-logo6.jpeg"

const NftParnterSection = ({t})=>{
    return(
        <ParnterContainer>
            <Heading>{t("nftPartner")}</Heading>
            <ParnterBox data-aos="fade-down">
                <Grid item xs={12} sm={4}>
                    <a href="https://opensea.io/"><ParnterImg1 src={nft1} alt="nft image"></ParnterImg1></a>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <a href="https://superrare.com/"><ParnterImg2 src={nft2} alt="nft image"></ParnterImg2></a>

                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <a href="https://niftygateway.com/"><ParnterImg1 src={nft3} alt="nft image"></ParnterImg1></a>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <a href="https://rarible.com/"><ParnterImg1 src={nft4} alt="nft image"></ParnterImg1></a>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <a href="https://foundation.app/"><ParnterImg2 src={nft5} alt="nft image"></ParnterImg2></a>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <a href="https://www.featured.market/"><ParnterImg1 src={nft6} alt="nft image"></ParnterImg1></a>
                </Grid>
            </ParnterBox>
        </ParnterContainer>
    )
}

export default NftParnterSection