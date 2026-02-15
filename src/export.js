document.addEventListener("DOMContentLoaded", () => {
    const exportBtn = document.getElementById("export");
    
    exportBtn.addEventListener("click", () => {
        const textArea = document.getElementById("input");
        const content = textArea.value.trim();
        const format = document.getElementById("format").value;

        if (!content) return alert("Text area is empty!");

        if (format === "pdf") {
            genPdf(content);
        } else {
            genTxt(content);
        }
    });

    function genPdf(content) {
        const { jsPDF } = window.jspdf; 
        const doc = new jsPDF();
        
        const margin = 15;
        const pageHeight = doc.internal.pageSize.height;
        const maxWidth = doc.internal.pageSize.width - (margin * 2);
        const lineHeight = 7; 
        const lines = doc.splitTextToSize(content, maxWidth);
        
        let cursorY = margin;
        lines.forEach(line => {
            if (cursorY + lineHeight > pageHeight - margin) {
                doc.addPage();
                cursorY = margin;
            }
            
            doc.text(line, margin, cursorY);
            cursorY += lineHeight;
        });
        doc.save("document.pdf");
    }

    function genTxt(content) {
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "document.txt";
        a.click();
        URL.revokeObjectURL(url);
    }
});