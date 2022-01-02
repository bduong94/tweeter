/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  //Clone tweets container
  let tweetsContainer = $("tweets-container").clone();

  //Validation function
  const validate = function (text) {
    if (text === "text=") {
      alert("Tweet cannot be empty!");
    } else if (text.length > 145) {
      alert("Tweet cannot exceed 140 characters!");
    } else {
      return true;
    }
  };
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
          <span>${timeago.format(tweet["created_at"])}</span>
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

  //Prevent form submission
  $("form").submit(function (event) {
    let $text = $(this).serialize();
    event.preventDefault();
    if (validate($text)) {
      $.post("/tweets", $text);
      this.reset();
      loadTweets();
    }
  });

  //Fetches tweets from the http://localhost:8080/tweets page
  const loadTweets = function () {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });
  };

  //Loads initial tweets
  loadTweets();

  // //Loads tweets every time button is clicked
  // $("form").on("submit", function (event) {
  //   event.preventDefault();
  //   console.log($(this).serialize());
  //   console.log("Button clicked, performing ajax call...");
  //   $.get("/tweets", loadTweets());
  // });
});
