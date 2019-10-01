import React from 'react'

import { fetchTopStories } from '../utils/api'

import StoriesView from '../components/StoriesView'
import Loading from '../components/Loading'

export default function Top() {
    const [stories, setStories] = React.useState(null)

    React.useEffect(() => {
        getStories(0, 30)
    }, [])

    const getStories = async (start,end) => {
        const data = await fetchTopStories(start, end)
        setStories(data)
    }

    
    if(!stories){
        return <Loading />
    }

    return (
        <div>
            {stories && <StoriesView stories={stories}/>}
        </div>
    )
}