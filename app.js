window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperature = document.querySelector('.temperature');
    let loc = document.querySelector('.city');
    let desc = document.querySelector('.desc');
    let icon =document.querySelector('#icon');
    let fl = document.querySelector('.fl');
    let min = document.querySelector('.min');
    let max = document.querySelector('.max');
    let ctr = document.querySelector('.country');
    let speed = document.querySelector('.speed');
    let deg = document.querySelector('.Deg');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat = position.coords.latitude;

            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=96100f030ca532c3158730d61f8bae5a`;
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data=> {
                console.log(data);
                const {temp,feels_like,temp_min,temp_max} = data.main;
                //set DOM elements from API
                const cel = Math.round(temp-273.15,1);
                const fel = Math.round(feels_like-273.15,1)
                const mn = Math.round(temp_min-273.15,1)
                const mx = Math.round(temp_max-273.15,1)
                console.log(temp)
                temperature.textContent = cel;
                fl.textContent = fel;
                ctr.textContent = data.sys.country;
                min.textContent = mn;
                max.textContent = mx;
                speed.textContent = data.wind.speed;
                deg.textContent = data.wind.deg;
                loc.textContent = data.name;
                desc.textContent = data.weather[0].description;
                icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

            })
        });
        

    }

});