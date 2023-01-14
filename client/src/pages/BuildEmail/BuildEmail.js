// import React, { useState, useEffect } from 'react';
import "./BuildEmail.css"
import PreviewText from '../../components/PreviewText';
import Logo from '../../components/Logo';
import Content from '../../components/Content';
import CTAIcon from '../../components/CTAIcon';
import ViewOrShare from "../../components/ViewOrShare";
import SocialMedia from "../../components/SocialMedia";
import MenuEventBar from "../../components/MenuFooter";
import EmailFooter from "../../components/EmailFooter";
const BuildEmail = () => {
    return (
<>
    <PreviewText />
    <Logo />
    <Content />
    <CTAIcon />
    <ViewOrShare />
    <SocialMedia />
    <MenuEventBar />
    <EmailFooter />
</>
    )
}

export default BuildEmail;