/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const createTweetElement = function () {};

  const postTweet = document.querySelector(".tweet-footer button");

  //Test Code
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };
});

/* <section class="posted-tweet">
        <header>
          <span>Bob</span>
          <span>@Bob</span>
        </header>
        <div>
          <span>I am having a wonderful day today!</span>
        </div>
        <footer>
          <span>10 days ago</span>
          <span>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
      </section> */
