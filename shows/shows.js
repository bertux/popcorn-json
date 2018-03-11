var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
//    console.log(this.responseText);
//    document.write(this.responseText);
var shows = JSON.parse(this.responseText);
for (i = 0; i < shows.length; i++) { 
     document.getElementById("pages").innerHTML += '<p id="page' + (i+1) + '">' + shows[i] + "</p>";
}
  }
});

xhr.open("GET", "https://tv-v2.api-fetch.website/shows");

xhr.send(data);
