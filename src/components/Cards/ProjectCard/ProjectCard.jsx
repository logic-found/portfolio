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
            <div className="projectCardContent">
                <div className="projectCardTitle">{project.title}</div>
                {/* <div className="projectCardDate">{project.date}</div> */}
                <div className="projectCardTags">
                    {project.tags?.map((tag, index) => (
                        <div className="projectCardTag">{tag}</div>
                    ))}
                </div>
                <div className="projectCardDesc">{project.description}</div>

                <div className="projectCardButtonGroup">
                    <button
                        onClick={() => window.open(project.github)}
                        className="projectCardBtn dark"
                    >
                        Code
                    </button>
                    <button
                        onClick={() => window.open(project.webapp)}
                        className="projectCardBtn light"
                    >
                        Live
                    </button>
                    {project.demo && (
                        <button
                            onClick={() => window.open(project.webapp)}
                            className="projectCardBtn dark"
                        >
                            Demo
                        </button>
                    )}
                </div>
            </div>
            <div className="projectCardImg">
            <img src={project.image} alt="" className="" />
          </div>
          
        </div>
    );
};

export default ProjectCard;
