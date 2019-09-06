import React, { Component } from 'react'
import {Link} from "gatsby";


export default class blog extends Component {
    render() {
        return (
            <React.Fragment>
            
                <div>
                    this is out blog page
                </div><br/>
                <Link to="/">Home page</Link>
            </React.Fragment>
        )
    }
}

