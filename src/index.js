function generatePoem(event){
    event.preventDefault();

    alert("Generating a poem");

    new Typewriter("#poem", {
        strings: "Sun of my Soul, oh Savior dear",
        autoStart: true,
        delay: 'natural',
        cursor: "",
    });
}


let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit",generatePoem);