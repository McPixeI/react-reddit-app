<div>
  <h1 align="center"><a href="https://astounding-moxie-edc0e9.netlify.app/"> React Reddit App Demo</a></h1>
  <strong>
    Description
  </strong>
  <p>
    This is a code challenge which uses Reddit API.
  </p>
  <a style='display:block;text-align:center' href="https://astounding-moxie-edc0e9.netlify.app/">
    <img
        style='margin:0 auto;'
      alt="app screenshot"
      src="https://astounding-moxie-edc0e9.netlify.app/preview.jpg"
    />
  </a>
</div>

<hr />


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
6. Unit test :heavy_check_mark:
7. Use the latest release of React or one release before the latest :heavy_check_mark:

## Extra points

* Typescript
* eslint and prittier :heavy_check_mark:
* Module resolver or similar (for simplify import paths)

<hr />

## Built with:

* React.js (CRA)
* Redux + Redux Toolkit
* Redux Toolkit Query
* React Hooks 
* Tailwind
* react-error-boundary
* @testing-library
* @heroicons
* REDDIT API

## Extra features (not demanded by the challenge):

* Added "NSFW" preview on Post List for protection
* Dark/light mode
* Custom UI components made with Tailwind
* Usage of skeletons aproach for loading states
* Usage of Error boundaries

## Some notes

### Tests

<img alt="tests" src="https://astounding-moxie-edc0e9.netlify.app/tests.jpg"/>

* There are 32 passing tests
* Test components are on the same folder as the owner component in /components folder
* The rest of relevant tests are under `__test__` folder
* There are tests for redux, server mocking, router, components, and the relevant containers in the page (`PostList` and `CategoryFilter`)

### About file exports
* I didn't use any module resolver because I'm confortable and used to use the `index.js` export aproach of the "real" file in the same folder to simplify a bit component exports

### Language

* I choosed JS over TS because there was a limited time on the challenge and I feel a lot more confortable with it.

### Naming

* I like to name components with PascalCase ("MyCompoent")
* The rest, (hooks, tests...) are mostly dash separated file names

## Installation 

Clone and install the dependencies for `react-reddit-app`:

```bash 
  git clone https://github.com/McPixeI/react-reddit-app.git
  cd react-reddit-app
  npm install
```

## Setup and running the app

1. Take a copy of .env.example and re-name to .env.local
2. Start the project using `npm run start` or `npm start`

## Author

- [@McPixeI](https://github.com/McPixeI)