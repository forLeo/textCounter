var filetype = "txt";
var content	= document.getElementById("input").value;
var button = document.getElementById("export");

button.addEventListener("input", (event) => main());
clear.addEventListener("click", (event) => {
    main();
});

function main() {
    if(filetype === "pdf") {
        genPdf();
    }
    else if(filetype === "txt") {
        genTxt();
    }
}

function genTxt() {
    var txtBlob = new Blob(["Hello World!"], {type: "text/plain;charset=utf-16"});
}