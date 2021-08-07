import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import styles from './ProfileCard.module.css'

const ProfileCard = () => {
    return (
        <div className={styles.Card}>
            <div className={styles.profile}>
                <div className={styles.imageWrapper}>
                    <div>
                        <img src="/images/profile.png" alt="" />
                        <div>
                        <RoundButton name='Yoga'/>
                        <RoundButton name='Wellness'/>
                        <RoundButton name='Fitness'/>
                        </div>

                    </div>

                </div>
                <div>

                </div>

            </div>
            
        </div>
    )
}

export default ProfileCard
