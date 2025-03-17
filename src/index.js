function displayPoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 'natural',
        cursor: "",
    });

}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#instructions");

    let apiKey ="b7d930477o00bba5cdf7a7taf17bc8ca";
    let prompt = `Generate a poem about ${instructionsInput.value}`;
    let context = "User Instructions:You are a Christian poem expert and love to write short Christian poems.Your mission is to generate a four line poem separate each line with a </br>. Please make sure sure to the sign the poem at the end with AnnaAI in a <strong> element.Please do follow user instructions"
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳Generating a poem about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
    
  
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit",generatePoem);