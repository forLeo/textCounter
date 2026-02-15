document.addEventListener("DOMContentLoaded", function() {
    var textArea = document.getElementById("input");
    var words = document.getElementById("words");
    var characters = document.getElementById("characters");
    var clear = document.getElementById("clear");

    textArea.addEventListener("input", (event) => {
        main()
    });

    clear.addEventListener("click", (event) => {
        textArea.value = "";
        main();
    });

    function countWords(text) {
        return text.split(/\s+/).filter(Boolean).length;
    }

    function countCharacters(text) {
        return text.length;
    }

    function main() {
        var text = textArea.value;
        words.textContent = "words: " + countWords(text);
        characters.textContent = "characters: " + countCharacters(text);
    }
});