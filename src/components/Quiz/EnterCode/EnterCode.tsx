import React from 'react';
import styles from './EnterCode.module.css';

const EnterCode = () => {
    return (
        <div className={styles.content}>
            <div className={styles.title}>Play a Quizzel</div>
            <div className={styles.enterCode}>
                <div className={styles.codeInfo}>
                    <input type="text" placeholder='Enter a quizzel code' />
                    <button>Join</button>
                </div>
                <div className={styles.createRoom}>
                    <div className={styles.line}></div>
                    <div className={styles.text}>OR</div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.createBtn}>
                    <span>Create your own Quizzel</span>
                </div>
            </div>
        </div>
    )
}

export default EnterCode