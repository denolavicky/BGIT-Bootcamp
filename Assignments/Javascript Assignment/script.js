

let colors = ["red", "blue", "green", "yellow", "purple"];
        let currentIndex = 0;

        const myContent = document.getElementById("myContent");
        const colorButton = document.getElementById("colorButton");

        colorButton.addEventListener("click", function() {
            myContent.style.color = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        });