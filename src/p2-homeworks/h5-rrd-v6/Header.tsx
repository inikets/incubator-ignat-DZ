import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Pages";
import i from './Header.module.css'

function Header() {
    return (
        <div>
            <NavLink  className={i.links} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink  className={i.links} to={PATH.JUNIOR}> Junior</NavLink>
            <NavLink  className={i.links} to={PATH.JUNIOR_PLUS}> JuniorPlus</NavLink>
        </div>
    )
}

export default Header
