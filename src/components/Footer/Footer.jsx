import React from 'react'
import './Footer.scss'
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import { Bio } from '../../data/data';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className="footerTitle">Rashika Sahu</div>
        <div className="footerSection">
          <a href="#about" className="footerSectionItem">About</a>
          <a href="#skills" className="footerSectionItem">Skills</a>
          <a href="#experience" className="footerSectionItem">Experience</a>
          <a href="#projects" className="footerSectionItem">Projects</a>
          <a href="#education" className="footerSectionItem">Education</a>
        </div>
        <div className="socialMediaIcons">
          <a href={Bio.linkedin} target="_blank" className="socialMediaIcon"><LinkedInIcon /></a>
          <a href={Bio.twitter} target="_blank" className="socialMediaIcon"><TwitterIcon /></a>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Footer