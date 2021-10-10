

const weatherApp = document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();
    //input value
    const input = event.target.search.value;
    //fetch the url
    const basicUrl = `https://wttr.in/${input}?format=j1`
    //Toronto
    //Area: Toronto
    //Region: Ontario
    //Country: Canada
    //Currently: Feels like 92F
    if (!input) {
       document.querySelector(".display").textContent = "Please enter a city or location"
       throw "error"
    } 


    fetch(basicUrl).then((response) => response.json()).then((db) => {
        
        document.querySelector(".display").innerHTML = 
        `<h2><b>${input}</b></h2>
        <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
        <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
        <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
        <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>`

        const li = document.createElement("li")
        li.innerHTML =  
        `
        <a href="#" value='${basicUrl} name='test'>
        ${db.nearest_area[0].areaName[0].value}- 
        ${db.current_condition[0].FeelsLikeF}°F</a>`;
        
        li.addEventListener("click", (event) => {
           
            document.querySelector(".display").innerHTML = 
            `<h2><b>${input}</b></h2>
            <p><b>Area:</b> ${db.nearest_area[0].areaName[0].value}</p>
            <p>Region:</b> ${db.nearest_area[0].region[0].value}</p>
            <p>Country:</b> ${db.nearest_area[0].country[0].value}</p>
            <p>Currently:</b> Feels Like ${db.current_condition[0].FeelsLikeF}°F</p>`


            const days = ["Today", "Tomorrow", "Day After Tomorrow"];
            for (let i = 0; i < days.length; i++) {

                    div[i].innerHTML = `
                    <h3>${days[i]}</h3>
                    <p><b>Average Temperature:</b> ${db.weather[i].avgtempF}°F</p>
                    <p><b>Max Temperature:</b> ${db.weather[i].maxtempF}°F</p>
                    <p><b>Min Temperature:</b> ${db.weather[i].mintempF}°F</p>`
    
            }
         })

        const list = document.querySelector(".history ul");
     
        let found = false;
        document.querySelectorAll("ul li").forEach((each) => {
          if (each.innerHTML === li.innerHTML) {
            found = true;
          }
        });
        if (!found) {
          list.append(li);
        }

        document.querySelector(".history ul p").textContent = ""

        const days = ["Today", "Tomorrow", "Day After Tomorrow"];
        const div = document.querySelectorAll(".days div")

        for (let i = 0; i < days.length; i++) {

                div[i].innerHTML = `
                <h3>${days[i]}</h3>
                <p><b>Average Temperature:</b> ${db.weather[i].avgtempF}°F</p>
                <p><b>Max Temperature:</b> ${db.weather[i].maxtempF}°F</p>
                <p><b>Min Temperature:</b> ${db.weather[i].mintempF}°F</p>`
                console.log(days[i])
        
        }

    }).catch(console.log)

    event.target.reset();

})

//what is going on?