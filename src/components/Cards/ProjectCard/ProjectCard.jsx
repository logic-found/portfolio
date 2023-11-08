import React, { useState } from "react";
import "./ProjectCard.scss";
import ProjectCardDetails from "../ProjectDetailsCard/ProjectDetailsCard";

const ProjectCard = ({ project, setOpenProjectDetails }) => {
  return (
    <div
      className="projectCard"
      onClick={() =>
        setOpenProjectDetails({ state: true, projectDetails: project })
      }
    >
      <img src={project.image} alt="" className="projectCardImg" />
      <div className="projectCardTags">
        {project.tags?.map((tag, index) => (
          <div className="projectCardTag">{tag}</div>
        ))}
      </div>
      <div className="projectCardContent">
        <div className="projectCardTitle">{project.title}</div>
        <div className="projectCardDate">{project.date}</div>
        <div className="projectCardDesc">{project.description}</div>
      </div>
      <div className="projectCardButtonGroup">
        <button
          onClick={() => window.open(project.github)}
          className="projectCardBtn viewCode"
        >
          Source Code
        </button>
        <button
          onClick={() => window.open(project.webapp)}
          className="projectCardBtn viewApp"
        >
          Live App
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
