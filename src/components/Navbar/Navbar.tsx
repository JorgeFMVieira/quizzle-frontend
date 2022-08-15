import React from 'react'
import Logo from './Logo/Logo'
import styles from './Navbar.module.css'
import NavItems from './NavItems/NavItems'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navContent}>
                <Logo name={'Quizzel'} />
                <NavItems />
            </div>
            <div className={styles.navline}></div>
        </div>
    )
}

export default Navbar