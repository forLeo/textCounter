import { jsPDF } from "jspdf";

document.addEventListener("DOMContentLoaded", function() {
    var filetype = "pdf";
    var button = document.getElementById("export");
    const doc = new jsPDF();

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
        var content = document.getElementById("input").value;
        var maxWidth = 180;
        var lineHeight = 10;
        var xPosition = 10;
        var yPosition = 10;
        var pageHeight = 280;
    
        doc.setFont("helvetica");
        doc.setFontSize(12);
    
        var lines = doc.splitTextToSize(content, maxWidth);
    
        lines.forEach(function(line) {
            if (yPosition > pageHeight) {
                doc.addPage();
                yPosition = 10;
            }
            doc.text(line, xPosition, yPosition);
            yPosition += lineHeight;
        });
    
        doc.save("download.pdf");
        console.log("PDF generated");
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
        console.log("TXT generated");
    }
});