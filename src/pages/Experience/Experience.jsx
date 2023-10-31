import React from "react";
import "./Experience.scss";
import { Title, SubTitle } from "../../components/TitleandSubTitle/TitleandSubTitle";
import ExpCard from "../../components/Cards/ExpCard/ExpCard";
import { experiences } from "../../data/data";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'

const Experience = () => {
  return (
    <div id="experience">

    <Container>
      <Wrapper>
        <Title title="Experience" />
        <div className="experienceTimelineSection">
          <Timeline>
            {experiences.map((experience,index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExpCard experience={experience} key={index}/>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Wrapper>
    </Container>
    </div>
  );
};

export default Experience;
