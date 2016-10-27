var w3UrlRegex = /(?:http|https):\/\/(?:www\.)?w3schools.com/;

function getResultURL(result) {
  return result.querySelector("a").href;
}

function handleResult(result) {
  var resultURL = getResultURL(result);

  console.log(resultURL,w3UrlRegex);
  if(resultURL.match(w3UrlRegex)) {
    hideResult(result);
  } 
}

function hideResult(result) {
  result.style.display = "none";
}

var results = document.querySelector(".srg").childNodes;

//No foreach since this is not a proper array
for (var i = 0; i < results.length; i++) {
  handleResult(results[i]);
}
