import React from 'react'
import HeaderHook from "../examples/Header-Hooks.js";
import HeaderStatic from "../examples/Header-Static.js";
import Layout from "../components/layout";


const examples = () => {
    return (
        <div>
            <Layout>
                examples page
                <HeaderHook/>
                <HeaderStatic/>
            </Layout>
        </div>
    )
}

export default examples
