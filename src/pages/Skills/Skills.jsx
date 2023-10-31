import React from "react";
import "./Skills.scss";
import { Title, SubTitle } from "../../components/TitleandSubTitle/TitleandSubTitle";
import { skills } from "../../data/data";
import SkillCard from "../../components/Cards/SkillCard/SkillCard";
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'

const Skills = () => {
  return (
    <div id="skills">

    <Container>
      <Wrapper>
        <Title title="Skills" />
        {/* <SubTitle subTitle="desc" /> */}
        <div className="skillContainer">
          {skills.map((skill,index) => (
            <SkillCard key={index} title={skill.title} skills={skill.skills} />
          ))}
        </div>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Skills;
