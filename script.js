const jokeDIV = document.querySelector("#joke");

function genJoke() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://api.chucknorris.io/jokes/random");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      jokeDIV.innerHTML = JSON.parse(this.responseText).value;
    } else {
      jokeDIV.innerHTML = "Joke is not ready yet.";
    }
  };

  request.send();
}

document.querySelector(".btn").addEventListener("click", genJoke);

document.addEventListener("DOMContentLoaded", genJoke);
