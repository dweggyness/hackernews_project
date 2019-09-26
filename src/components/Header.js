import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../utils/theme'

import '../styles/Header.scss'

export default function Header() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
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
            )}
        </ThemeConsumer>
    )
}