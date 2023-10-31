import React from 'react'
import './ExpCard.scss'

const ExpCard = ({experience, education}) => {
  return (
    <div className="card">
        <div className="top">
            <img src={experience?.image || education?.image} alt="Img here" className="cardImg" />
            <div className="body">
                {(experience?.role || education?.school) && <div className="cardTitle">{experience?.role || education?.school}</div>}
                {(experience?.company || education?.degree) && <div className="cardSubTitle"><b>{experience?.company || education?.degree}</b></div>}
                {(experience?.date || education?.date) && <div className="cardDate">{experience?.date || education?.date}</div>}
            </div>
        </div>
        {education?.grade && <div className='cardSubTitle2' ><b>Grade: </b>{education?.grade}</div>}
        {(experience?.desc || education?.desc) && <div className="cardDescription">
            <span>{experience?.desc || education?.desc} </span>
        </div>}
        {experience?.skills && 
        <div className="cardSkills">
            <b>Skills: </b>
            <div className="cardSkillsItems">
                {experience?.skills?.map((skill, index) => (
                    <div className="cardSkillsItem">• {skill}</div>
                ))}
            </div>
        </div>
        

        }
    </div>
  )
}

export default ExpCard