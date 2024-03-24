import React from "react";
import "./ProjectDetailsCard.scss";
import Container from "../../Container/Container";
import Wrapper from "../../Wrapper/Wrapper";
import { Modal } from "@mui/material";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";

const ProjectDetailsCard = ({ project, setOpenProjectDetails }) => {
  return (
    <Modal
      open={true}
      onClose={() =>
        setOpenProjectDetails({ state: false, projectDetails: null })
      }
    >
      <div className="projectDetailsCardContainer">
        <div className="projectDetailsCardWrapper">
          <div className="projectDetailsCardCloseIcon" onClick={() => setOpenProjectDetails({ state: false, projectDetails: null})}>
            <CloseIcon />
          </div>
            <img src={project.image} alt="" className="projectCardDetailsImg" />
            <div className="projectCardDetailsTags">
              {project.tags?.map((tag, index) => (
                <div className="projectCardDetailsTag" key={index}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="projectCardDetailsContent">
              <div className="projectCardDetailsTitle">{project.title}</div>
              {/* <div className="projectCardDetailsDate">{project.date}</div> */}
              <div className="projectCardDetailsDesc">
                {project.description}
              </div>
            </div>
            <div className="projectDetailsCardButtonGroup">
              <button
                onClick={() => window.open(project?.github)}
                className="projectDetailsCardBtn dark"
              >
                Code
              </button>
              <button
                onClick={() => window.open(project?.webapp)}
                className="projectDetailsCardBtn light"
              >
                Live
              </button>
              {project.demo && (
                        <button
                            onClick={() => window.open(project.webapp)}
                            className="projectDetailsCardBtn dark"
                        >
                            Demo
                        </button>
                    )}
            </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsCard;
