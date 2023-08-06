import React from 'react';
import styles from './title.module.css'

const Title = ({text , img}) => {
    return (
        <div className={styles.title}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.descr}>
                    {text}         
                </h1>
            </div>
        </div>
    );
};

export default Title;