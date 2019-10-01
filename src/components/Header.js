import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../utils/theme'

import '../styles/Header.scss'

export default function Header({ toggleTheme }) {
    const theme = React.useContext(ThemeContext)
    
    return (
        <nav className="header">
            <ul>
                <li>
                    <NavLink to='/'
                    className={`link ${theme}`} 
                    activeStyle={{color: 'rgb(165, 30, 30)'}}
                    exact >
                        ⌘ Hackermedia
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' 
                    className={`link ${theme}`} 
                    activeStyle={{color: 'rgb(165, 30, 30)'}}
                    exact >
                        New
                    </NavLink>
                </li>
            </ul>
            <button
                className="themeButton"
                onClick={toggleTheme}
                >
                {theme === 'light' ? '🔦' : '💡'}
            </button>
        </nav> 
    )
}