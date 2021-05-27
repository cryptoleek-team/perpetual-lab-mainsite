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
    AdvisorCertImg
} from './TeamElements'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import Advisor1 from '../../images/Advisor1.jpeg'
import Advisor2 from '../../images/Advisor2.jpeg'
import Cert1 from "../../images/cert1.png"
import Cert2 from "../../images/cert2.png"

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
                <Heading>{t('AdvisorTitle')}</Heading>
                <TopLine>{t('AdvisorTopline')}</TopLine>
            </TextWrapper>

            <div data-aos="fade-down">
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
