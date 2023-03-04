
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
        console.log(data)
    })
    .catch(err => {
        document.body.style.backgroundImage = 
        'url(https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzc3OTU2MjQ&ixlib=rb-4.0.3&q=80&w=1080)'
    })

fetch('https://api.coingecko.com/api/v3/coins/dogecoin?localization=true&tickers=true&   market_data=true&community_data=true&developer_data=true&sparkline=true')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById("crypto-top").innerHTML = `
                <img src="${data.image.small}"> 
                <span>${data.name}</span>`
            document.getElementById("crypto").innerHTML += `
                <p>🎯: $${data.market_data.current_price.usd}</p>
                <p>👆: $${data.market_data.high_24h.usd}</p>
                <p>👇: $${data.market_data.low_24h.usd}</p>`
    })
    .catch(err => console.error(err))



function getTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getTime, 1000)

let lat;
let lon;


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
            <div id="weather-items">
                <img src="${iconUrl}" class="icon"></img>
                <p class="temp">${Math.round(data.main.temp)}º</p>
            </div>
            <p class="city">${data.name}</p>`
            
            console.log(data)
        })
        .catch(err => console.error(err))
});

    

