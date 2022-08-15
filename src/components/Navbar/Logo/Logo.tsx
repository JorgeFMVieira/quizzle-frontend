import React from 'react'
import styles from './Logo.module.css'

export type LogoProps = {
    name: string
}

const Logo = (props: LogoProps) => {
    return (
        <div className={styles.logo}>
            {props.name}
        </div>
    )
}

export default Logo