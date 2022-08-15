import React from 'react'
import Item from './Item/Item'
import styles from './NavItems.module.css'

const NavItems = () => {
    return (
        <div className={styles.navitems}>
            <Item isButton={false} name={'Join Quiz'} />
            <Item isButton={false} name={'Sign In'} />
            <Item isButton={true} name={'Sign Up'} />
        </div>
    )
}

export default NavItems