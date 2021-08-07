import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'
const Header = () => {
    return (
        <>
        <div className={styles.header}>
        <Navigation/>
        <h1 className={styles.heading}>Start your day with the goodness of Yoga</h1>
        </div>
       
        </>
      
    )
}

export default Header
