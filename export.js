document.addEventListener("DOMContentLoaded", function() {
    var filetype = "txt";
    var button = document.getElementById("export");

    button.addEventListener("click", (event) => main());

    function main() {
        if(filetype === "pdf") {
            genPdf();
        }
        else if(filetype === "txt") {
            genTxt();
        }
    }

    function genTxt() {
        var content = document.getElementById("input").value;
        var txtBlob = new Blob([content], {type: "text/plain;charset=utf-8"});
        var url = URL.createObjectURL(txtBlob);
        var link = document.createElement("a");
        link.href = url;
        link.download = "download.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
});