import React from 'react'
import styles from './Item.module.css'

export type ItemProps = {
    isButton: boolean;
    name: string;
};

const Item = (props: ItemProps) => {
    return (
        <div className={styles.item}>
            {props.isButton ? <button>{props.name}</button> : <span>{props.name}</span>}
        </div>
    )
}

export default Item