/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  //Test Code
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  //Create new element using tweetData object - Helper function
  const createTweetElement = function (tweet) {
    let newTweet = `
      <section id="tweets-container">
      <article class="posted-tweet">
        <header>
          <span>
            <img class="avatar" src="${tweet["user"]["avatars"]}" alt="" />
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

  //Function that creates all tweets
  const renderTweets = function (tweetData) {
    for (let tweets of tweetData) {
      let $newTweet = $(createTweetElement(tweets));
      $("#tweets-container").append($newTweet);
    }
  };

  //Creates tweets
  renderTweets(data);

  //Prevent form submission
  $("form").submit(function (event) {
    event.preventDefault();
    console.log($(this).serialize());
    $.post("/tweets", $(this).serialize());
  });

  // const postTweet = document.querySelector(".tweet-footer button");
});
