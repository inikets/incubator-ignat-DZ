import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import Pages from './Pages'





function HW5() {

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
            <div><Header/></div>


            <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
