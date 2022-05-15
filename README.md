# React Reddit App

This is a code challenge which uses Reddit API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code challenge description

Reddit is a news website in which registered users can submit posts or links
to content that other users can vote and comment, the total number of votes
determine the position of the post inside the website, each of these posts are
grouped into categories known as “subreddits”.

This APP should list the posts in the r/pics subreddit.

Create a radio button with four options to get the different sorts:

* New (default): https://api.reddit.com/r/pics/new.json
* Hot: https://api.reddit.com/r/pics/hot.json
* Controversial: https://api.reddit.com/r/pics/controversial.json
* Top: https://api.reddit.com/r/pics/top.json

For more information about the JSON structure see:
https://github.com/reddit-archive/reddit/wiki/json

## Requirements

1. Use a list to display a scrollable list of the latest posts in the r/pics subreddit :heavy_check_mark:
2. Each post must show the following data: thumbnail image (if present), title, author, total number of votes (score), number of comments and date of creation (in a relative format ( e.g. “1 day ago” ) :heavy_check_mark:
3. Once the user taps on a post, open a new tab with the contents of the post URL :heavy_check_mark:
4. Ability to refresh the posts list :heavy_check_mark:
5. Use redux or Context Api :heavy_check_mark:
6. Unit test
7. Use the latest release of React or one release before the latest :heavy_check_mark:


## Extra points

* Typescript
* eslint and prittier :heavy_check_mark:
* Module resolver or similar (for simplify import paths)

