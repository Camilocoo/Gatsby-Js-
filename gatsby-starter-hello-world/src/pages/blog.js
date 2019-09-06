import React, { Component } from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout"


export default class blog extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Layout>
                    <div>
                        this is out blog page
                    </div><br/>
                    <Link to="/">Home page</Link>
                </Layout>
            </React.Fragment>
        )
    }
}

