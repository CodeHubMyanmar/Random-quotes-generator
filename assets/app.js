let btn = document.querySelector(".btn");
let quote_text = document.getElementById("quote-txt");
let author_text = document.querySelector(".author");

btn.addEventListener("click", () => {
  btn.innerText = "Loading Quotes";
  btn.classList.add("load");
  fetch("https://api.quotable.io/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      btn.classList.remove("load");
      btn.innerText = "New Quotes";
      quote_text.innerText = `${data.content}`;
      author_text.innerText = `By ${data.author}`;
    })
    .catch((reject) => {
      console.log(reject);
    });
});

let speech = document.getElementById("speech");
speech.addEventListener("click", (_) => {
  let txtToSpeech = new SpeechSynthesisUtterance(
    `${quote_text.innerText} by ${author_text.innerText}`
  );
  speechSynthesis.speak(txtToSpeech);
});

let copy = document.getElementById("copy");
copy.addEventListener("click", (_) => {
  navigator.clipboard.writeText(quote_text.innerText);
});

let twitter_share = document.getElementById("twitter_share");
twitter_share.addEventListener("click", (_) => {
  let url = `https://twitter.com/intent/tweet?url=${quote_text.innerText}`;

  window.open(url, "_blank");
});
