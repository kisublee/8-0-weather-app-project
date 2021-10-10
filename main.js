

const weatherApp = document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    //input value
    const input = event.target.search.value;

    //Basic URL
    const basicUrl = `https://wttr.in/${input}?format=j1`

    //Toronto
    //Area: Toronto
    //Region: Ontario
    //Country: Canada
    //Currently: Feels like 92F

    //If there is no input, return an error message.
    if (!input) {
       document.querySelector(".display").textContent = "Please enter a city or location"
       throw "error"
    } 

    //Fetch
    fetch(basicUrl).then((response) => response.json()).then((db) => {
        
        document.querySelector(".display").innerHTML = 
        `<h2><b>${input}</b></h2>
        <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
        <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
        <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
        <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>`

    
        }).catch(console.log)

    event.target.reset();

})