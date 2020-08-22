import React, { useState } from 'react';
import * as styles from './FAQRoom.module.css';

import avatar from '../../../assets/avatar.jpg';

const FAQRoom: React.FC<{}> = (props) => {
    const introText = "lorem ipsum";
    const [mainDialogue, setMainDialogue] = useState(introText);

    return (
        <div className={styles.room}>
            <button id={styles.backButton} onClick={() => props.setDisplay(0)}>Back</button>
            <img src={avatar} id={styles.avatar} />
            <div id={styles.dialogue} className='nes-container is-dark is-rounded'>
                <p className={styles.dialogueTitle}>~Dan Awena~</p>
                <p>{mainDialogue}</p>
                <div id={styles.dialogueChoices}>
                    <button onClick={() => { setMainDialogue("You fell for it, fool! Thunder Cross Split Attack!")}} className={styles.dialogueButton}>cwick me uwu</button>
                    <button className={styles.dialogueButton}>ask me more</button>
                    <button className={styles.dialogueButton}>ask me more</button>
                </div>
            </div>
        </div>
    )
}

export default FAQRoom