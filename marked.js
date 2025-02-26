document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const markdownText = e.target.result;
        document.getElementById("output").innerText = markdownText; // Display raw markdown
    };
    reader.readAsText(MolecularTherapy10349.md);
});


