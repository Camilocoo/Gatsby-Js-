import React from 'react';
import {Link} from "gatsby";
//import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    {/*<Link className={styles.navbar}>home</Link>*/}
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/products/">Products</Link>
                </li>
                <li>
                    <Link to="/examples/">examples</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
