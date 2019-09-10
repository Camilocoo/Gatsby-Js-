import React from 'react';
import Navbar from './Navbar';
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const layout = ({children}) => {
    return (
        <div>
           
            <Navbar/>
            <main>
            {children}
            </main>
        </div>
    )
}

export default layout
