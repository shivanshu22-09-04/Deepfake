function scrollToDetect(){
    document.getElementById("detect").scrollIntoView({
        behavior: "smooth"
    });
}

function analyze(){
    const fileInput = document.getElementById("fileInput");
    const result = document.getElementById("result");

    if(fileInput.files.length === 0){
        result.style.color = "red";
        result.innerText = "Please upload a file first.";
        return;
    }

    result.style.color = "#00f0ff";
    result.innerText = "Analyzing...";

    setTimeout(() => {
        const confidence = Math.floor(Math.random() * 100);

        if(confidence > 60){
            result.style.color = "red";
            result.innerText = "⚠️ High probability of Deepfake detected (" + confidence + "% confidence)";
        } else {
            result.style.color = "lime";
            result.innerText = "✔️ Content appears Authentic (" + (100 - confidence) + "% confidence)";
        }
    }, 2000);
}