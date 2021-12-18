$(document).ready(function () {
  const tweetText = document.querySelector(".new-tweet textarea");
  const charLimit = 140;

  tweetText.addEventListener("input", function () {
    let tweetLength = this.value.length;
    let currentLimit = charLimit - tweetLength;
    let characterLimit = $(this).next().children(".counter");

    characterLimit[0]["value"] = currentLimit;

    if (characterLimit[0]["value"] < 0) {
      characterLimit.css("color", "red");
    } else {
      characterLimit.css("color", "");
    }
  });
});
