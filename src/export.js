import { jsPDF } from "jspdf";

document.addEventListener("DOMContentLoaded", function() {
    var filetype = "pdf";
    var button = document.getElementById("export");

    button.addEventListener("click", (event) => main());

    function main() {
        console.log("Exporting as " + filetype);
        if(filetype === "pdf") {
            genPdf();
        }
        else if(filetype === "txt") {
            genTxt();
        }
    }

    function genPdf() {
        const doc = new jsPDF();
        var content = document.getElementById("input").value;
        var maxWidth = 180;
        var lineHeight = 10;
        var xPosition = 10;
        var yPosition = 10;
        var pageHeight = 280;

        doc.text(content, xPosition, yPosition, { maxWidth: maxWidth });

        doc.save("document.pdf");
    }

    function genTxt() {
        var content = document.getElementById("input").value;
        var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "document.txt";
        link.click();
    }
});