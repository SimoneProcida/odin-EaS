const canvas = document.getElementById ("container")

createGrid ()

function createGrid () {
    for(let i = 0; i < 16* 16; i++) {
        let block = document.createElement("div");
        block.style.border = "1px solid black";
        block.style.width = "30px";
        block.style.height = "30px";
        block.classList.add("block");

        block.addEventListener("mouseover", function(e) {
           block.classList.add("black");
           block.style.backgroud = "black";

        });

        canvas.appendChild(block);
    }
}

function randomize () {
    
}