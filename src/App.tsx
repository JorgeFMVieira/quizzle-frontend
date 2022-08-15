import React from 'react'
// import styles 
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar'
import EnterCode from './components/Quiz/EnterCode/EnterCode';

const App = () => {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <EnterCode />
            </div>
        </div>
    )
}

export default App