import React from 'react'
import styles from './style.module.css'
const RoundButton = (props) => {
    return (
        <>
        <button className={` ${styles.roundedButton}`}>
            {
                props.name
            }

        </button>
            
        </>
    )
}

export default RoundButton
