function checkVowel() {
    var inputText = document.getElementById("inputText").value;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < inputText.length; i++) {
        if (vowels.includes(inputText[i])) {
            console.log(true);
            return;
        }
    }
    console.log(false);
}