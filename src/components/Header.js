import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../styles/Header.scss'

export default function Header() {
    return (
        <nav>
            <ul className="header">
                <li>
                    <NavLink to='/'
                    className="link" 
                    activeStyle={{color: 'rgb(150, 50, 50)'}}
                    exact >
                        ⌘ Hackermedia
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' 
                    className="link" 
                    activeStyle={{color: 'rgb(150, 50, 50)'}}
                    exact >
                        New
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}