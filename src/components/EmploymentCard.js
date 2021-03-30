import React from 'react'
import Content from '../components/Content'
// import { Link } from 'gatsby'
// import Image from './Image'
import { MapPin, Smartphone, List, Mail } from 'react-feather'


import './EmploymentCard.css'
import '../templates/ContactPage.css'

const EmploymentCard = ({
  title,
  excerpt,
  html,
  startDate,
  endDate,
  company,
  companyUrl,
  button
}) => (
  <section className="section Contact--Section1">
  <div className="EmploymentCard">
      <div className="Contact--Details--Left">
          {title    && <h3 className="EmploymentCard--Title">{title}</h3>}
          {company && (
          <a
            className="Contact--Details--Item"
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin />Unternehmen: {company}
          </a>
        )}
         {startDate && (
           <time itemProp="startDate" date={startDate}>{startDate}</time>)} - 
         {endDate ? (
           <time itemProp="endDate" date={endDate}>{endDate}</time>) : "bis jetzt"}
      </div>

    <div  className="Contact--Details--Right">
      <Content source={html} />
    </div>
  </div>
</section>
// <div className='EmploymentCard'>
  //   <div className="EmploymentCard--Image">
  //     <List/>
  //   </div>
  //   <div className='EmploymentCard-Title'>
  //     {title    && <h3 className="EmploymentCard--Title">{title}</h3>}
  //     <div className="EmploymentCard--Company">
  //       {startDate && (
  //         <time itemProp="startDate" date={startDate}>{startDate}</time>)} - 
  //       {endDate ? (
  //         <time itemProp="endDate" date={endDate}>{endDate}</time>) : "bis jetzt"}
  //     </div>
  //     <div className="EmploymentCard--DateInterval">
  //       {company && (
  //       <a className="SinglePost--SubTitle" href={companyUrl} target="_blank" rel="noreferrer">
  //         {company}
  //       </a>)}
  //     </div>
  //   </div>
  //   <div className="EmploymentCard--Content">
  //     <Content>{html}</Content>
  //   </div>
  //   <div className='Button'>
  //     Projects
  //   </div>
  // </div>
)

export default EmploymentCard
