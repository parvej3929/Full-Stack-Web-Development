document.getElementById("btn").addEventListener("click", getQuote);

async function getQuote() {
  try {
    document.getElementById("para").innerText = "Loading...";

    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();

    document.getElementById("para").innerText = data.quote;
    document.getElementById("author").innerText = "- " + data.author;

  } catch (error) {
    document.getElementById("para").innerText = "Failed to load quote.";
  }
}