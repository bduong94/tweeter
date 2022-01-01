/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
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

  //Selects tweetsContainer
  const tweetsContainer = document.querySelector("#tweets-container");

  //Create new element using tweetData object
  const createTweetElement = function (tweet) {
    let newTweet = `
      <section id="tweets-container">
      <article class="posted-tweet">
        <header>
          <span>
            <img class="avatar" src="${tweetData["user"]["avatars"]}" alt="" />
            <div>${tweet["user"]["name"]}</div>
          </span>
          <span>${tweet["user"]["handle"]}</span>
        </header>
        <div class="tweetedText">${tweet["content"]["text"]}</div>
        <footer>
          <span>${tweet["created_at"]}</span>
          <span>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
      </article>
    </section>`;

    return newTweet;
  };

  let $newTweet = $(createTweetElement(tweetData));
  $("#tweets-container").append($newTweet);

  // const postTweet = document.querySelector(".tweet-footer button");
});
