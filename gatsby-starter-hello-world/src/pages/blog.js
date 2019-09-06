import React, { Component } from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";
import '../components/blog.css'


export default class blog extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Layout>
                    <div>
                        <h1 className="blog-title">
                        this is out blog page
                        </h1>
                    </div><br/>
                    <Link to="/">Home page</Link>
                </Layout>
            </React.Fragment>
        )
    }
}

