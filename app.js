var inputTxt = document.querySelector("#input-text")
var translateBtn = document.querySelector("#btn-translate")
var outputTxt = document.querySelector("#output-text")

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
var serverUrl = "https://api.funtranslations.com/translate/yoda.json?text="

translateBtn.addEventListener("click", function translate(){
    fetch(serverUrl + inputTxt.value)
    .then(res => res.json())
    .then(json => outputTxt.innerText = json.contents.translated)
})
