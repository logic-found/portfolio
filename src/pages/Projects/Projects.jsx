import React, {useState} from 'react'
import './Projects.scss'
import Container from '../../components/Container/Container'
import Wrapper from '../../components/Wrapper/Wrapper'
import { Title, SubTitle } from "../../components/TitleandSubTitle/TitleandSubTitle";
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard'
import ProjectDetailsCard from '../../components/Cards/ProjectDetailsCard/ProjectDetailsCard';
import { projects } from '../../data/data'

const Projects = () => {
  const [openProjectDetails, setOpenProjectDetails] = useState({
    state : false,
    projectDetails : null
  })

  return (
    <div id="projects">

    <Container>
      <Wrapper>
        <Title title="Projects" />
        {/* <SubTitle subTitle="desc" /> */}
        <div className="projectCardContainer">
          {projects.map((project, index) => (
            <ProjectCard project={project} setOpenProjectDetails={setOpenProjectDetails}/>
          ))}
        </div>

        {openProjectDetails.state && <ProjectDetailsCard project={openProjectDetails.projectDetails} setOpenProjectDetails={setOpenProjectDetails}/>}
        
      </Wrapper>
    </Container>
    </div>
  )
}

export default Projects