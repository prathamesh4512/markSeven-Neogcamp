const input = document.getElementById("input-txt"),
  translateBtn = document.getElementById("translate-btn"),
  translatedOutput = document.getElementById("output-txt");

const SERVER_URL = "https://api.funtranslations.com/translate/doge.json";

function getUrl(text) {
  return SERVER_URL + "?text=" + text;
}

//erro handler
function errorHandler(error) {
  alert("You exceeded limit, please try again after 1 hr");
  console.log("Error: " + error);
}

function fetchOutput(inputText) {
  fetch(getUrl(inputText))
    .then((response) => response.json())
    .then((data) => {
      translatedOutput.innerText = data.contents.translated;
    })
    .catch(errorHandler);
}

//onclick event handler
function clickHandler() {
  var inputText = input.value;

  if (inputText === "") {
    alert("Please enter the text to translate");
    return;
  }

  fetchOutput(inputText);
}

function handleEnter(e) {
  if (e.key === "Enter") {
    fetchOutput(e.target.value);
  }
}

//attaching onclick eventlistener
translateBtn.addEventListener("click", clickHandler);

input.addEventListener("keydown", handleEnter);
