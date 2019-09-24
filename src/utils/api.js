
// returns an array of story objects from index(start) to index(end) in the topstories.json
// topstories len : 500
export async function fetchTopStories(start = 0, end =20) {
    const fetchURL = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const topStoryIDs = await fetchURL.json()

    const pageStories = topStoryIDs.slice(start, end)
    // only get IDs that will be displayed on this page
    
    // messy function, calls an async function on every storyID, then wait until
    // all of them are resolved before returning the object to the array
    const topStories = await Promise.all(
        pageStories.map((storyID) => {
            return getStory(storyID)
        })
    )

    return topStories
}

async function getStory(storyID) { // returns a story object for a given story id
    const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
    const data = await post.json()

    
    return data
}

/* data used from a story
{
    "by" : user
    "descendant" : comment count
    "score" : score
    "time" : time in UTC
    "title" : Post title
    "url" : HTML Url of post
}  */