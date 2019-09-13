import React from 'react';
import {Link} from "gatsby";
//import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    {/*<Link className={styles.navbar}>home</Link>*/}
                    <Link to="/">home</Link>
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
                <li>
                    <Link to="/images/">images</Link>
                </li>
                <li>
                    <Link to="/tours/">Tours</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
