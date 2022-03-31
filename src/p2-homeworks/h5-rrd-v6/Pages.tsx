import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import { Routes,Route,Navigate } from 'react-router-dom'
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/*'
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
