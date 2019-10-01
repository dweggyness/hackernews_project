
// returns an array of top storys from index(start) to index(end)
export async function fetchTopStories(start = 0, end =30) {
    const fetchURL = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const topStoryIDs = await fetchURL.json()
    // an array of the top story IDs / 500

    const pageStories = topStoryIDs.slice(start, end)
    // only get IDs that will be displayed on this page
    
    return await getStories(pageStories)
}

// returns an array of new storys from index(start) to index(end)
// roughly same functionality as fetchTopStories
export async function fetchNewStories(start = 0, end = 30) {
    const fetchURL = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    const newStoryIDs = await fetchURL.json()
    const pageStories = newStoryIDs.slice(start, end)
    
    return await getStories(pageStories)
}


// returns an array of comments - given a story ID
export async function fetchComments(storyID) {
    const post = await getItem(storyID)
    const commentIDs = post.kids // post.kids = array of commentID a story has

    if(!commentIDs) {
        return [{ text: 'No comments found!',
                 by: null }]
    }
    const comments = await Promise.all(
        commentIDs.map((commentID) => {
            return getItem(commentID)
        })
    )

    return comments
}

// returns an array of stories(ONLY) given an array of IDs
// max of 30 at once
export async function getStories(IDs){
    const storyIDs = IDs.slice(0, 30)
    const items = await Promise.all(
        storyIDs.map(async (storyID) => {
            return getItem(storyID)
        })
    )

    const stories = items.filter((item) => {
        if(item) {
            return item.type === "story"
        } else {
            return null
        }
    })

    return stories
}

export async function getItem(ID) { // returns a story/comment object - given story/comment ID
    const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ID}.json`)
    const data = await post.json()

    return data
}

export async function getUser(name) { // returns a user object - given username
    const user = await fetch(`https://hacker-news.firebaseio.com/v0/user/${name}.json`)
    const data = await user.json()

    return data
}

/* data used from a story
{
    "by" : user
    "score" : score
    "time" : time in UTC
    "title" : Post title
    "url" : HTML Url of post
    "descendants" : comment count
    "kids" : IDs of comments
}  */