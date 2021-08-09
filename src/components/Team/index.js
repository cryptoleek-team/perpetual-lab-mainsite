import React, { useState } from "react";
import {
    InfoContainer,
    TextWrapper,
    Heading,
    TopLine,
    AdvisorContainer,
    AdvisorImg,
    AdvisorDesc,
    AdvisorBox,
    AdvisorName,
    TeamImg,
    ConversationImg
} from './TeamElements'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Grid from '@material-ui/core/Grid';
import Member1 from '../../images/seabook.png'
import Member2 from '../../images/hao.png'
import Member3 from '../../images/van.png'
import Member4 from '../../images/adam.png'
import Advisor1 from '../../images/Advisor1.jpeg'
import Advisor2 from '../../images/Advisor2.jpeg'
import Cert1 from "../../images/cert1.png"
import Cert2 from "../../images/cert2.png"
import Conversation from "../../images/conversation.jpg"
import Meetup from "../../images/meetup.jpg"

const certImgaes = [Cert1, Cert2]
const meetupImages = [Conversation, Meetup]

const Team = ({ t }) => {
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [openImg, setOpenImg] = useState(false)

    return (
        <InfoContainer>
            <TextWrapper>
                <Heading>{t('teamTitle')}</Heading>
                <TopLine>{t('teamInfo')}</TopLine>
            </TextWrapper>

            <AdvisorContainer data-aos="fade-in">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TeamImg src={Member1} alt="member1"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName1')} - {t('teamMemberRole1')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc1')}</AdvisorDesc>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TeamImg src={Member2} alt="member2"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName2')} - {t('teamMemberRole2')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc2')}</AdvisorDesc>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TeamImg src={Member3} alt="member3"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName3')} - {t('teamMemberRole3')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc3')}</AdvisorDesc>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TeamImg src={Member4} alt="member4"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName4')} - {t('teamMemberRole4')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc4')}</AdvisorDesc>
                        </div>
                    </Grid>
                </Grid>
            </AdvisorContainer>

            <TextWrapper>
                <Heading>{t('advisorTitle')}</Heading>
                <TopLine>{t('advisorTopline')}</TopLine>
            </TextWrapper>

            <div data-aos="fade-in">
                <AdvisorContainer>
                    <AdvisorBox>
                        <AdvisorImg src={Advisor1} alt="advisor1" onClick={() => setOpen(true)}></AdvisorImg>

                        <div>
                            <AdvisorName>{t('advisorName1')}</AdvisorName>
                            <AdvisorDesc>{t('advisorDesc1')}</AdvisorDesc>
                        </div>
                    </AdvisorBox>

                    <AdvisorBox>
                        <AdvisorImg src={Advisor2} alt="advisor2" onClick={() => setOpen(true)}></AdvisorImg>
                        <div>
                            <AdvisorName>{t('advisorName2')}</AdvisorName>
                            <AdvisorDesc>{t('advisorDesc2')}</AdvisorDesc>
                        </div>
                    </AdvisorBox>
                </AdvisorContainer>

                <TextWrapper>
                    <Heading>{t('togetherWithAdvisors')}</Heading>
                </TextWrapper>

                <div data-aos="fade-in">
                    <AdvisorContainer>
                        <AdvisorBox>
                            <ConversationImg src={Conversation} onClick={() => setOpenImg(true)} />
                        </AdvisorBox>

                        <AdvisorBox>
                            <ConversationImg src={Meetup} onClick={() => setOpenImg(true)} />
                        </AdvisorBox>
                    </AdvisorContainer>
                </div>

                {open && (
                    <Lightbox
                        mainSrc={certImgaes[photoIndex]}
                        nextSrc={certImgaes[(photoIndex + 1) % certImgaes.length]}
                        prevSrc={certImgaes[(photoIndex + certImgaes.length - 1) % certImgaes.length]}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + certImgaes.length - 1) % certImgaes.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % certImgaes.length)
                        }
                    />
                )}


                {openImg && (
                    <Lightbox
                        mainSrc={meetupImages[photoIndex]}
                        nextSrc={meetupImages[(photoIndex + 1) % meetupImages.length]}
                        prevSrc={meetupImages[(photoIndex + meetupImages.length - 1) % meetupImages.length]}
                        onCloseRequest={() => setOpenImg(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + meetupImages.length - 1) % meetupImages.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % meetupImages.length)
                        }
                    />
                )}
            </div >
        </InfoContainer >
    )

}

export default Team;
