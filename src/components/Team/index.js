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
    AdvisorCertImg,
    TeamImg
} from './TeamElements'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';


import Member1 from '../../images/seabook.png'
import Member2 from '../../images/hao.png'
import Member3 from '../../images/van.png'
import Advisor1 from '../../images/Advisor1.jpeg'
import Advisor2 from '../../images/Advisor2.jpeg'
import Cert1 from "../../images/cert1.png"
import Cert2 from "../../images/cert2.png"

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Team = ({ t }) => {
    const [open, setOpen] = useState(false);
    const [isFirst, setFirst] = useState(false);
    const classes = useStyles();
    const handleOpen = (events) => {
        setOpen(true);
        if (events.target.alt === 'advisor1') {
            setFirst(true);
        } else {
            setFirst(false);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <InfoContainer>
            <TextWrapper>
                <Heading>{t('teamTitle')}</Heading>
                <TopLine>{t('teamInfo')}</TopLine>
            </TextWrapper>

            <AdvisorContainer data-aos="fade-in">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <TeamImg src={Member1} alt="member1"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName1')} - {t('teamMemberRole1')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc1')}</AdvisorDesc>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <TeamImg src={Member2} alt="member2"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName2')} - {t('teamMemberRole2')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc2')}</AdvisorDesc>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <TeamImg src={Member3} alt="member3"></TeamImg>
                        <div>
                            <AdvisorName>{t('teamMemberName3')} - {t('teamMemberRole3')}</AdvisorName>
                            <AdvisorDesc>{t('teamMemberDesc3')}</AdvisorDesc>
                        </div>
                    </Grid>
                </Grid>
            </AdvisorContainer>

            <TextWrapper>
                <Heading>{t('AdvisorTitle')}</Heading>
                <TopLine>{t('AdvisorTopline')}</TopLine>
            </TextWrapper>

            <div data-aos="fade-in">
                <AdvisorContainer>
                    <AdvisorBox>
                        <AdvisorImg src={Advisor1} alt="advisor1" onClick={handleOpen}></AdvisorImg>

                        <Modal
                            open={open}
                            className={classes.modal}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropProps={{
                                timeout: 500,
                            }}>

                            <Fade in={open}>
                                <AdvisorCertImg src={isFirst ? Cert1 : Cert2} alt="certificate1"></AdvisorCertImg>
                            </Fade>
                        </Modal>

                        <div>
                            <AdvisorName>{t('AdvisorName1')}</AdvisorName>
                            <AdvisorDesc>{t('AdvisorDesc1')}</AdvisorDesc>
                        </div>
                    </AdvisorBox>

                    <AdvisorBox>
                        <AdvisorImg src={Advisor2} alt="advisor2" onClick={handleOpen}></AdvisorImg>

                        <Modal
                            open={open}
                            className={classes.modal}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropProps={{
                                timeout: 500,
                            }}>

                            <Fade in={open}>
                                <AdvisorCertImg src={isFirst ? Cert1 : Cert2} alt="certificate2"></AdvisorCertImg>
                            </Fade>
                        </Modal>
                        <div>
                            <AdvisorName>{t('AdvisorName2')}</AdvisorName>
                            <AdvisorDesc>{t('AdvisorDesc2')}</AdvisorDesc>
                        </div>
                    </AdvisorBox>
                </AdvisorContainer>
            </div >

        </InfoContainer >
    )

}

export default Team;
