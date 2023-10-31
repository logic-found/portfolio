import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skillCard">
      <div className="skillTitle">{title}</div>
      <div className="skillList">
        {skills.map((item) => (
            <div className="skillItem">
            <img className="skillImg" src={item.image} alt="image"></img>
                {item.name}
            </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
