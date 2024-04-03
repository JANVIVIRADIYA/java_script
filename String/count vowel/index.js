function countVowels() {
    var inputText = document.getElementById("inputText").value;
    var vowels = "aeiouAEIOU";
    var vowelCount = 0;

    for (var i = 0; i < inputText.length; i++) {
        if (vowels.includes(inputText[i])) {
            vowelCount++;
        }
    }

    console.log("Total Vowels:", vowelCount);
}