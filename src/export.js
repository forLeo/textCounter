import { jsPDF } from "jspdf";

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("export");

    button.addEventListener("click", (event) => main());

    function main() {
        var filetype = document.querySelector('input[name="format"]:checked').value;
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
        var pageHeight = doc.internal.pageSize.height;

        var lines = doc.splitTextToSize(content, maxWidth);

        lines.forEach((line, index) => {
            if (yPosition + lineHeight > pageHeight) {
                doc.addPage();
                yPosition = 10; // Reset yPosition for the new page
            }
            doc.text(line, xPosition, yPosition);
            yPosition += lineHeight;
        });

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