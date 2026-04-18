let num = 0;

document.getElementById("start").addEventListener("click", function () {
  setInterval(function () {
    num++;
    document.getElementById("count").innerText = num;
  }, 1000);
});