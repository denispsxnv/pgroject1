import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
import LOGO from './420.png'
import basket from './bi_basket.png'
import insta from './Group.png'
import facebook from './Vector.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.navlink}>
                    <NavLink to="/" className={styles.activeClass}>Каталог</NavLink>
                    <NavLink to="/" className={styles.activeClass}><img src={LOGO} alt="LOGO" /></NavLink>
                    <NavLink to="/register" className={styles.activeClass}>log in</NavLink>

                    
                </div>

                <div className={styles.linnks}>
                    <NavLink to='/' className={styles.activeClass}><img src={basket} alt="basket" /></NavLink>
                    <a href='https://www.instagram.com' className={styles.activeClass}><img src={insta} alt="instagram" /></a>
                    <a href='https://www.facebook.com' className={styles.activeClass}><img src={facebook} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;