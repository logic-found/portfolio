import React from 'react'
import './TitleandSubTitle.scss'

export const Title = ({title}) => {
  return (
    <div className="title">
      {title}
    </div>
  )
}



export const SubTitle = ({subTitle}) => {
  return (
    <div className="subTitle">
      {subTitle}
    </div>
  )
}
