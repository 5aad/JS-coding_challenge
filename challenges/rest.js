/**
 * Implement the loadPosts() function that returns a Promise resolving with posts
 * loaded from https://jsonplaceholder.typicode.com/posts and alphabetically sorted by title
 *
 *
 * Usage example:
 * ```
 * loadPosts().then(posts => {
 *      console.log(posts); // [{ title: ... } ...]
 * });
 * ```
 */

async function loadPosts() {
  // write your code here
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.ok) {
    const posts = await response.json();
    return posts.sort((a, b) => { //alphabetically sorted by title
      if (a.title < b.title) {
        return -1;
      }
    });
  } else {
    return "Failed to load the post";
  }
}

loadPosts().then((posts) => {
  console.log(posts); // [{ title: ... } ...]
});

module.exports = loadPosts;
