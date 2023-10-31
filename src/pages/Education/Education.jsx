import React from 'react'
import './Education.scss'
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'
import ExpCard from '../../components/Cards/ExpCard/ExpCard'
import {education} from '../../data/data'
import { Title, SubTitle } from "../../components/TitleandSubTitle/TitleandSubTitle";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Education = () => {
  return (
    <div id="education">

    <Container>
      <Wrapper>
      <Title title="Education" />
        <div className="educationTimelineSection">
          <Timeline>
            {education.map((education,index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExpCard education={education} key={index}/>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Education