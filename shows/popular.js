var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
//    console.log(this.responseText);
var shows = JSON.parse(this.responseText);
for (i = 0; i < shows.length; i++) { 
//     document.getElementById("shows").innerHTML += '<p id="show' + (i+1) + '">' + shows[i][_id] + "</p>";
     document.write('<p id="show' + (i+1) + '">' + shows[i].title + "</p>");
}
  }
});

xhr.open("GET", "https://tv-v2.api-fetch.website/shows/1");

xhr.send(data);
