import React from 'react';
import styles from './products.module.css'

import { Link } from 'react-router-dom';



const Products = ({id, img , name , brand , category , sizes}) => {

 
    return (
        <div className={styles.products}>
            <div className={styles.productWrapper}>
                <img src={img} alt="" />
                <div className={styles.title}>
                    <h1 className={styles.productName}>
                        <Link to={`/post/${id}`} className={styles.link}>{name}</Link>
                    </h1>
                    <p className={styles.brand}>
                        {brand}
                    </p>
                    <p className={styles.category}>
                        {category}
                    </p>
                    
                    <p className={styles.size}>
                        {sizes + " "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Products;