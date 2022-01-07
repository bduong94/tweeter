/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  //Validation function
  const validate = function (text) {
    if (text === "text=") {
      return "empty";
    } else if (text.length > 145) {
      return "max";
    } else {
      return true;
    }
  };

  //Escape function
  const escapeText = function (text) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  };

  //Create new element using tweetData object - Helper function
  const createTweetElement = function (tweet) {
    let newTweet = `
      <article class="posted-tweet">
        <header>
          <span>
            <img class="avatar" src="${tweet["user"]["avatars"]}" alt="" />
            <div>${tweet["user"]["name"]}</div>
          </span>
          <span>${tweet["user"]["handle"]}</span>
        </header>
        <div class="tweetedText">${escapeText(tweet["content"]["text"])}</div>
        <footer>
          <span>${timeago.format(tweet["created_at"])}</span>
          <span>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </span>
        </footer>
      </article>
`;

    return newTweet;
  };

  //Function that creates all tweets
  const renderTweets = function (tweetData) {
    for (let i = tweetData.length - 1; i > -1; i--) {
      let $newTweet = $(createTweetElement(tweetData[i]));
      $("#tweets-container").append($newTweet);
    }
  };

  //Fetches tweets from the http://localhost:8080/tweets page
  const loadTweets = function () {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });
    $("#tweets-container").slideDown();
  };

  //Loads initial tweets
  loadTweets();

  //Prevent form submission and reloads tweets
  $("form").submit(function (event) {
    let $text = $(this).serialize();
    let $errorMessages = $("#error-messages");
    event.preventDefault();
    $errorMessages.slideUp();
    if (validate($text) === "empty") {
      $errorMessages.html("Tweet cannot be empty!");
      $errorMessages.slideDown();
      // alert("Tweet cannot be empty!");
    } else if (validate($text) === "max") {
      $errorMessages.html("Tweet cannot exceed 140 characters!");
      $errorMessages.slideDown();
      // alert("Tweet cannot exceed 140 characters!");
    } else {
      $.post("/tweets", $text);
      this.reset();
      $("#tweets-container").replaceWith(
        '<section id="tweets-container"></section>'
      );
      setTimeout(loadTweets, 100);
    }
  });

  //Show/Hide compose tweets
  $(".nav-new-tweet").click(function () {
    let $composetweet = $(".new-tweet");
    let $textBox = $("textarea");
    let displayValue = $composetweet.css("display");

    if (displayValue === "none") {
      $composetweet.slideDown();
      $textBox.focus();
    } else {
      $composetweet.slideUp();
    }
  });
});
