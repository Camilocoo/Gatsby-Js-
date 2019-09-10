import React, { Component } from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";
import styles from  '../components/blog.module.css'

console.log(styles);


export default class blog extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Layout>
                    <div>
                        <h1 className="title">
                        this is out blog page
                        </h1>
                        <h1 className={styles.green}>this is the second header</h1>
                    </div><br/>
                    <Link to="/">Home page</Link>
                </Layout>
            </React.Fragment>
        )
    }
}

