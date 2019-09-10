import React from "react"
import {Link} from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";
import {Button} from '../components/button'

export default () =>
<div>
    <Layout>
        <h1 className="title">This will be our homepage</h1>
        <h1>another heading</h1>
        <div>Hello world!</div>
        <Button>Hello from button</Button>
    </Layout>
</div>
 
