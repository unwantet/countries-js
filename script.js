const main = document.querySelector("main")
let URL = "https://restcountries.com/"
function getCountries() {
    fetch(URL + "v3.1/all")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        main.innerHTML = ""
        data.forEach(country => {
            const countryDiv = document.createElement("div")
            const countryImg = document.createElement("div")
            const countryInfo = document.createElement("div")
            countryDiv.classList.add("card")
            countryImg.classList.add("img")
            countryInfo.classList.add("info")
            countryImg.innerHTML = `
                <img class="flag" src="${country.flags.png}" alt="${country.name.common}">`
            countryInfo.innerHTML = `
                <h2>${country.name.common}</h2>
                <p class="pop">Population: <span>${country.population}</span></p>
                <p>Region: <span>${country.region}</span></p>
                <p>Capital: <span>${country.capital}</span></p>`
            main.appendChild(countryDiv)
            countryDiv.appendChild(countryImg)
            countryDiv.appendChild(countryInfo)
        })
    })
}
getCountries()