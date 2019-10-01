import React from 'react'
import queryString from 'query-string'

import { getUser, getStories } from '../utils/api'

import TimeFormatter from '../components/TimeFormatter'
import Loading from '../components/Loading'
import StoriesView from '../components/StoriesView'

import '../styles/User.scss'
import ThemeContext from '../utils/theme'

export default function User(props) {
    const [ user,setUser ] = React.useState(null)
    const [ stories,setStories] = React.useState(null)

    const theme = React.useContext(ThemeContext)

    React.useEffect(() => {
        const { id } = queryString.parse(props.location.search)

        getUserData(id)
    }, [props])


    const getUserData = async (id) => {
        const user = await getUser(id)
        setUser(user)

        const stories = await getStories(user.submitted)
        setStories(stories)
    }


    if(!(user)){
        return <Loading text="Loading user"/>
    }

    return (
        <React.Fragment>
            <div className="userContainer">
                <h1 className={`userTitle ${theme}`}>{user.id}</h1>
                <p className={`userInfo ${theme}`}>{`joined `} <span><TimeFormatter time={user.created} /></span> {` has `} <span>{user.karma}</span> {` karma`}</p>
                <p className={`about ${theme}`} dangerouslySetInnerHTML={{__html: user.about}}></p>
                
                <h3 className={`postsWord ${theme}`}>Posts</h3>
            </div>
            {!stories ? <Loading text="Loading posts" /> : 
                (stories === undefined || stories.length === 0) ? <div className={`postsWord ${theme}`} style={{marginLeft: '2rem'}}>No posts found!</div> : <StoriesView stories={stories} />}
        </React.Fragment>
    )
}