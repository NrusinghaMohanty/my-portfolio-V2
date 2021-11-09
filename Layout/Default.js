

import React, { Children } from 'react'
import Navbar from '../components/navbar/Navbar'



const Default = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default Default
