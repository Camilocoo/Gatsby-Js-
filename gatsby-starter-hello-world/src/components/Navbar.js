import React from 'react';
import {Link} from "gatsby";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/products/">Products</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
