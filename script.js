const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fadc8c0bd4msh4ee3402bf96137ep1fde1djsnf570988235f0',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather= async (input)=>{
    try {
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + input, options);
        const result = await response.text();
        const value= JSON.parse(result)
        city.innerHTML= value.location.name
        temp.innerHTML = `${value.current.temp_c}<span>&#8451;</span>`
        feels.innerHTML= `${value.current.feelslike_c}<span>&#8451;</span>`
        wind_sp.innerHTML= `${value.current.wind_kph} km/hr`
        wind_dr.innerHTML= `${value.current.wind_dir}`
        humidity.innerHTML= `${value.current.humidity}%`
        uv.innerHTML= `${value.current.uv}`
        visibility.innerHTML= `${value.current.vis_km} km`

        console.log(value)
    } catch (error) {
        console.error(error);
    }   
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(search.value)
})

getWeather("new delhi")
