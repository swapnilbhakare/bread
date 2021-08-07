import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import styles from './About.module.css'
const About = () => {
    return (
        <div className={` ${styles.About}`} style={{backgroundImage: "url(" + '/images/Group.svg' + ")"}}>
            <ProfileCard/>
            
        </div>
    )
}

export default About
