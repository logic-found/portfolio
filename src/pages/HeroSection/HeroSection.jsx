import React from "react";
import "./HeroSection.scss";
import HeroBgAnimation from "../../components/HeroBgAnimation/HeroBgAnimation";
import { Bio } from "../../data/data";
import Typewriter from "typewriter-effect";
import HeroImg from '../../../public/profile.jpeg'

const HeroSection = () => {
  return (
    <div className="heroContainer" id="about" style={{paddingTop: '120px'}}>
      <div className="heroBg">
        <HeroBgAnimation />
      </div>
      <div className="heroInnerContainer">
        <div className="heroLeftContainer">
          <div className="heroTitle">
            Hi, I am
            <br />
            {Bio.name}
          </div>
          <div className="textLoop">
            I am a 
            <span>
              <Typewriter options={{
                strings : Bio.roles,
                autoStart : true,
                loop : true,
              }} />
            </span>
          </div>
          <div className="heroSubTitle">{Bio.description}</div>
          <button className="resumeButton" onClick={() => window.open(Bio.resume)}>Check Resume</button>
        </div>
        <div className="heroRightContainer">
          <img src={HeroImg} alt="hero-image" className="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
